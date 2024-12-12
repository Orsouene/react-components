import dolciItaliani from "../data/data";
import Card from "./Card";
// tiramisu
const dolce = dolciItaliani.find(
  (dolce) => dolce.titolo.toLowerCase() === "tiramisu"
);
// cannoli
const dolce2 = dolciItaliani.find(
  (dolce) => dolce.titolo.toLowerCase() === "cannoli"
);
// panettone
const dolce3 = dolciItaliani.find(
  (dolce) => dolce.titolo.toLowerCase() === "panettone"
);

function Main() {
  return (
    <main className="container fluid">
      <Card titolo="Tiramisu" dolciItaliani={dolce} />
      <Card titolo="Cannoli" dolciItaliani={dolce2} />
      <Card titolo="Panettone" dolciItaliani={dolce3} />
    </main>
  );
}
export default Main;
