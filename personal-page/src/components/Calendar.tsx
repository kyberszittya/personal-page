"use client";


import React, {useState, useMemo} from 'react'
import {format, getDaysInMonth, startOfMonth, addMonths, subMonths, parseISO} from 'date-fns'


interface CalendarProps {
    highlightedDates: string[];
    onDateClick: (date: string) => void;
}

const BlogCalendar: React.FC<CalendarProps> = ({ highlightedDates, onDateClick}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    // Get the current month, year, and days in the month    
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    const year = format(currentDate, 'yyyy');
    const daysInMonth = getDaysInMonth(currentDate);
    const startDay = startOfMonth(currentDate).getDay();
    // Precompute year and month for optimization
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Convert highlightedDates to a Set for faster lookup (O(1) complexity)
    const highlightedDatesSet = useMemo(() => new Set(highlightedDates), [highlightedDates]);    

    // Optimized isHighlighted function
    const isHighlighted = (day: number) => {        
        const dateStr = format(new Date(currentYear, currentMonth, day), 'yyyy-MM-dd');
        return highlightedDatesSet.has(dateStr); // Check if the date exists in the Set
    };

    // Navigate to the next or previous month
    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const handleDateClick = (day: number) => {
        const dateStr = format(new Date(currentDate.getFullYear(), currentDate.getMonth(), day), 'yyyy-MM-dd');        
        if (isHighlighted(day)){
            onDateClick(dateStr);
        }

    }
    // Generate an array of days to render
    const days = [];
    for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="flex-1 p-2"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
    days.push(
        <div
            key={day}
            className={`flex-1 p-2 text-center cursor-pointer rounded-lg ${isHighlighted(day) ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleDateClick(day)}
        >
        {day}
        </div>
    );
    }

    return (
    <div className="p-4 max-w-md mx-auto bg-slate-950 rounded-lg shadow-lg">
        {/* Month Navigation */}
        <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-lg font-bold">&lt;</button>
        <div className="text-lg font-bold">{month} {year}</div>
        <button onClick={nextMonth} className="text-lg font-bold">&gt;</button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
        <div className="text-center font-bold">Sun</div>
        <div className="text-center font-bold">Mon</div>
        <div className="text-center font-bold">Tue</div>
        <div className="text-center font-bold">Wed</div>
        <div className="text-center font-bold">Thu</div>
        <div className="text-center font-bold">Fri</div>
        <div className="text-center font-bold">Sat</div>
        {days}
        </div>
    </div>
    );
};

export default BlogCalendar;