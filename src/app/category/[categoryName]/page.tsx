import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const categories = [
    ...new Set(games.map((game) => game.category.toLowerCase())),
  ];
  return categories.map((category) => ({
    categoryName: category,
  }));
}

export default function CategoryPage({ params }: { params: { categoryName: string } }) {
  const categoryName = params.categoryName;
  const gamesInCategory = games.filter(
    (game) => game.category.toLowerCase() === categoryName
  );

  if (gamesInCategory.length === 0) {
    notFound();
  }

  const capitalizedCategory =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8 text-center">
        {capitalizedCategory} Games
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gamesInCategory.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </main>
  );
}
