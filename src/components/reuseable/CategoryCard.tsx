import { useRouter } from "next/navigation";

type ICategoryCard = {
  title: string;
  id: string;
};

export default function CategoryCard({ title, id }: ICategoryCard) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`categories/${id}`)}
      className="flex flex-col items-center gap-2 bg-sky-600 rounded-md p-6 hover:-translate-y-2 transition-transform"
    >
      <p className="font-bold text-white">{title}</p>
    </div>
  );
}
