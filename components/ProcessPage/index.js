import React from 'react';
import styles from './processpage.module.scss';
import Layout from '../Layout';


const ProcessPage = () => {
  return (
    <Layout>
      <div className={styles.bod}>
        <h1 className={styles.title} id="how-work">How does it work?<a href="#how-work" className={styles.headerAnchor}>#</a></h1>
        <h2 className={styles.subTitle} id="tldr">TL;DR<a href="#tldr" className={styles.headerAnchor}>#</a></h2>
        <p className={styles.textBody}>The created pokemon are assembled by leveraging pokemon
          categories such as type, egg group, and shape. After some heuristics have been applied
          to filter candidate limbs, a selection is made using a distance metric with the provided
          stat inputs.
        </p>

        <div className={styles.subTitle} id="poke-dataset">Pokemon Dataset<a href="#poke-dataset" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>
          The generator uses the first 3 generations of Pokemon. Each of the 386 Pokemon sprites and
          data were pulled from the PokeAPI. After the sprites had been collected, each of the
          Pokemon`s legs, arms, heads, tails, and bodies were isolated and sorted. 
        </p>
        <p className={styles.textBody}>
          We next create body templates for the system to paste Pokemon body parts onto. In Pokemon, there
          are 14 unique body shapes. These include 'upright, 'quadruped', 'ball', 'tentacles', and
          more. The Pokemon's body shape dictates what body parts that Pokemon's body has attached
          to it, and it also dictates what body parts it contributes to the overall dataset.
        </p>
        <p className={styles.textBody}>
          In order for our system to paste the isolated Pokemon body parts (head, legs, arms, etc.)
          onto the isolated Pokemon body in a cohesive manner, it needs 'anchor points', or (x,y)
          coordinates that tell the system where to put the arms, legs, head, etc. These anchor points
          must be generated manually for each Pokemon body that we wish to include in our system's
          sampling. It was for this reason, among others, that we opted to include only two body shapes
          for our system to generate: 'upright', and 'quadruped. Another reason we narrowed it down to
          these two body shapes was because these two body shapes occur the most commonly of the 14 body
          shapes in the first three generations of Pokemon. This gave us the most examples to select the
          Pokemon whose bodies best lend themselves to being isolated and having other Pokemon parts pasted
          to them. For each of the two body types we used, we selected the two or three Pokemon whose sprites
          best fit this description. We took their isolated bodies and manually found the coordinates for
          where the head, arms, legs, and tails should be pasted. Our system uses these coordinates to attach
          the isolated body parts to the appropriate body.
        </p>
        <div className={styles.subTitle} id="knn">KNN<a href="#knn" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>
          K-nearest neighbors (KNN) is a method to classify an unlabeled data point in n-dimensional
          space. By calculating the distance, using a chosen distance metric, of the unlabeled data
          point with the labeled data, a ranking of data points is made by order of least distance.
          Then, from the highest k ranking points, the unlabeled point's class is estimated as the most
          common class of the k-nearest points. For determining shape of the Pokemon we employ KNN, where
          the shape is the class we are determining for our unlabeled input data, and we find the
          distances from the subset of the data that has the same Pokemon Type as given in the input.
          Currently our system only supports the quadruped and upright body shapes because
          we still need to label (x,y) coordinates for anchor points of the necessary body attachments.
          When KNN classifies a shape that our system does not yet support, the chosen shape defaults to
          upright. For the distance metric we use the Euclidean distance of all the numerical Pokemon
          battle related dimensions.
        </p>
        <div className={styles.subTitle} id="egg-groups">Egg groups<a href="#egg-groups" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>
          In the game of Pokemon there exists a game mechanic of breeding. With this mechanic, a player
          can supply two different (one male, one female) Pokemon which may produce an egg, that will
          later hatch into the provided female Pokemon but can inherit abilities of the father. For breeding
          to have a chance of successfully producing an egg, it is required that the breeding Pokemon be
          of the same egg group. Egg groups are given to Pokemon based on their biological traits, or in
          other words, physical appearance. For example, the Water 1 egg group comprises of Pokemon amphibious
          in nature, the Water 2 egg group Pokemon are piscine like, and Pokemon in Water 3 egg group resemble
          aquatic invertebrates. Like Type, a Pokemon may belong to 1 or 2 egg groups.
        </p>
        <p className={styles.textBody}>
          We leverage these egg groups to add diversity in a controlled way. First we iterate through
          all of the Pokemon of a given Type, keeping a tally of each egg group that appears. This results
          with a distribution of egg groups. With the relevant distribution, for each of the necessary body
          part sets (arms, head, etc.), we sample the distribution getting an egg group. Then, for each egg
          group we get the subset of Pokemon belonging to the particular egg group and find the closest one
          to the target using the Euclidean distance metric, giving us all the parts to assemble our new
          Pokemon. This manner of choosing Pokemon parts stays within existing Pokemon biology Type patterns
          (e.g. No Fire Types with Fish parts), being weighted towards the more common egg group, but still
          allowing for a mixing of body parts from different egg groups.
        </p>
        <div className={styles.subTitle} id="pasting-poke">Pasting Pokemon<a href="#pasting-poke" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>
          With the body template as a base, body parts are pasted onto the template following an order that
          gives a natural layering in the event that there is some overlap of the collaged assets.An 
          additional challenge of placing the body parts is that body parts vary in size and shape.To deal 
          with this, we have generally applied heuristics for placing each of the body parts with respect to 
          the templates' anchor points. 
        </p>





        <div className={styles.title} id="know-more">Want to know more?<a href="#know-more" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>For the full write up of the Pokemon Generation process read <a href='./pokemon_generation.pdf' target="_blank">here</a></p>

        <div className={styles.title} id="aknowledgements">Aknowledgments<a href="#aknowledgements" className={styles.headerAnchor}>#</a></div>
        <p className={styles.textBody}>Credit to <a href='https://www.reddit.com/user/JonnyDros/'>u/JonnyDros</a> for the type emblems used on this site.</p>
      </div>
    </Layout>
  );
};

export default ProcessPage;