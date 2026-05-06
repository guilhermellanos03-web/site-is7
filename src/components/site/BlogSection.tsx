import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { blogPosts, categoryColors } from "@/data/blogData";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 bg-[#0A1628]">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-brand-purple font-medium text-sm tracking-widest uppercase mb-3">Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Conteúdos para alavancar seu negócio
            </h2>
            <p className="text-[#B0B0B0] max-w-lg mx-auto">
              Dicas práticas de marketing digital para empresas locais
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(123, 47, 190, 0.1)",
                  border: "1px solid rgba(123, 47, 190, 0.3)",
                }}
              >
                <div className="h-44 overflow-hidden">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0A1628] to-[#7B2FBE]/30 flex items-center justify-center">
                      <span className="text-white/20 text-6xl font-heading font-bold">IS7</span>
                    </div>
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <span className={`inline-block text-xs text-white px-3 py-1 rounded-full font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <h3 className="text-white font-bold leading-snug font-heading group-hover:text-brand-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#B0B0B0] text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[#B0B0B0] text-xs">{post.date}</span>
                    <span className="text-brand-purple text-sm font-medium flex items-center gap-1">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-brand-purple text-brand-purple px-6 py-3 rounded-full font-semibold hover:bg-brand-purple hover:text-white transition-all duration-300"
            >
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogSection;
