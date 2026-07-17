import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type Props = {
  content: string;
};

export default function MarkdownRenderer({
  content,
}: Props) {
  return (
    <div className="space-y-6 text-slate-300 leading-8">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-8 border-b border-slate-800 pb-5 text-5xl font-bold text-white">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mt-12 mb-6 text-3xl font-bold text-white">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mt-8 mb-4 text-2xl font-semibold text-white">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="leading-8 text-lg text-slate-300">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="ml-8 list-disc space-y-2">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="ml-8 list-decimal space-y-2">
              {children}
            </ol>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-8 rounded-xl border-l-4 border-blue-500 bg-slate-900 p-6 italic">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="overflow-auto">
              <table className="w-full border-collapse">
                {children}
              </table>
            </div>
          ),

          th: ({ children }) => (
            <th className="border border-slate-700 bg-slate-800 p-3 text-left text-white">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border border-slate-700 p-3">
              {children}
            </td>
          ),

          code(props) {
            const { children, className } = props;

            return (
              <code
                className={`${className ?? ""} rounded bg-slate-800 px-2 py-1`}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>

    </div>
  );
}