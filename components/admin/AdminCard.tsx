import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminCard({
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      {children}
    </div>
  );
}