import Card from "../components/Card";
import data from "../data/data";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center py-5">Portfolio</h2>
      <div className="w-full flex flex-wrap justify-center mx-auto gap-4 py-4">
        {data.map((proyect) => (
          <Card key={proyect.name} proyect={proyect} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
