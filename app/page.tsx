import { getBlueprintGraph } from "@/services";
import styles from "./page.module.css";
import { FormGraph, FormList } from "@/components";

export default async function Home() {
  const graph = await getBlueprintGraph()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Journey Builder by Strahinja Belic</h1>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <FormGraph graph={graph} />
          <FormList graph={graph} />        
        </div>
      </main>
    </div>
  );
}
