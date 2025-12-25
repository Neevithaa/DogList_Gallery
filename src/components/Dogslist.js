import One from '../assets/images/One.jpg'
import Two from '../assets/images/two.jpg'
import Three from '../assets/images/three.jpg'
import Four from '../assets/images/four.jpg'
import Five from '../assets/images/five.jpg'
import Six from '../assets/images/six.jpg'
import Seven from '../assets/images/seven.jpg'
import Eight from '../assets/images/eight.jpg'
function Dogslist() {

  const dogs = [
    { id: 1, image: One, name: "The Playful One", alt: "Dog 1" },
    { id: 2, image: Two, name: "The Innocent One", alt: "Dog 2" },
    { id: 3, image: Three, name: "The Joyful One", alt: "Dog 3" },
    { id: 4, image: Four, name: "The Lovable One", alt: "Dog 4" },
    { id: 5, image: Five, name: "The Silent One", alt: "Dog 5" },
    { id: 6, image: Six, name: "The Cheerful One", alt: "Dog 6" },
    { id: 7, image: Seven, name: "The Saint Doggo", alt: "Dog 7" },
    { id: 8, image: Eight, name: "The Cute One", alt: "Dog 8" }
  ];

  return (
    <>
      <div className="product-grid">
        {dogs.map((dog) => (
          <div className="product-card" key={dog.id}>
            <img src={dog.image} alt={dog.alt} />
            <p>{dog.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Dogslist