import Navbar from "@/components/Navbar";

export default function Project1DetailPage() {
    const project = {
      id: 'himeko',
      title: 'HyMeKo Hypergraph description language and tensor transformation',
      description:
        'Github link: https://github.com/kyberszittya/himeko_lang',
    };
  
    return (      
      <div className="container mx-auto py-8">        
        <Navbar />
        <main>
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-lg mb-4">{project.description}</p>
            <a
              href="/projects"
              className="text-blue-600 hover:underline"
            >
              ← Back to Projects
            </a>          
        </main>
      </div>
    );
  }