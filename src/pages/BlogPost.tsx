import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Copy, MessageCircle } from "lucide-react";
import { blogPosts, categoryColors } from "@/data/blogData";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";


const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#0A1628] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4 font-heading">Artigo não encontrado</h1>
            <Link to="/blog" className="text-brand-purple hover:underline">Voltar ao blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(post.title + " - " + window.location.href)}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc pl-6 space-y-2 text-[#B0B0B0] text-lg leading-relaxed">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        return;
      }

      if (trimmed.startsWith("### ")) {
        flushList();
        elements.push(<h3 key={i} className="text-xl font-bold text-white mt-8 mb-3 font-heading">{trimmed.slice(4)}</h3>);
      } else if (trimmed.startsWith("## ")) {
        flushList();
        elements.push(<h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4 font-heading">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith("- ")) {
        listItems.push(trimmed.slice(2));
      } else {
        flushList();
        elements.push(
          <p
            key={i}
            className="text-[#B0B0B0] text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }}
          />
        );
      }
    });
    flushList();
    return elements;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A1628]">
        <article className="py-16">
          <div className="container max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-[#B0B0B0] mb-8 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">Início</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-brand-purple">{post.category}</span>
            </nav>

            <Link to="/blog" className="inline-flex items-center gap-2 text-brand-purple text-sm font-medium mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Voltar ao blog
            </Link>

            <span className={`inline-block text-xs text-white px-3 py-1 rounded-full font-medium mb-4 ${categoryColors[post.category]}`}>
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight font-heading">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-[#B0B0B0] text-sm mb-10">
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} de leitura</span>
            </div>

            {/* Cover image */}
            <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0A1628] to-[#7B2FBE]/30 flex items-center justify-center">
                  <span className="text-white/10 text-8xl font-heading font-bold">IS7</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              {renderContent(post.content)}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-12 pt-8 border-t border-white/10">
              <span className="text-[#B0B0B0] text-sm flex items-center gap-1"><Share2 className="w-4 h-4" /> Compartilhar:</span>
              <button onClick={shareOnWhatsApp} className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Compartilhar no WhatsApp">
                <MessageCircle className="w-4 h-4 text-white" />
              </button>
              <button onClick={shareOnLinkedIn} className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Compartilhar no LinkedIn">
                <span className="text-white text-xs font-bold">in</span>
              </button>
              <button onClick={copyLink} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Copiar link">
                <Copy className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-brand-purple rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">Quer resultados como esses para sua empresa?</h3>
              <p className="text-white/80 mb-6">Entre em contato e receba um diagnóstico gratuito.</p>
              <a
                href="https://wa.me/5541987430349"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" /> Falar com especialista
              </a>
            </div>

            {/* Related */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-white mb-8 font-heading">Outros artigos</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/blog/${rp.slug}`}
                      className="rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                      style={{
                        background: "rgba(123, 47, 190, 0.1)",
                        border: "1px solid rgba(123, 47, 190, 0.3)",
                      }}
                    >
                      <div className="p-5 space-y-3">
                        <span className={`inline-block text-xs text-white px-3 py-1 rounded-full font-medium ${categoryColors[rp.category]}`}>
                          {rp.category}
                        </span>
                        <h4 className="text-white font-bold leading-snug font-heading group-hover:text-brand-purple transition-colors text-sm">
                          {rp.title}
                        </h4>
                        <span className="text-[#B0B0B0] text-xs">{rp.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
      
    </>
  );
};

export default BlogPost;
