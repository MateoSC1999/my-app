import greekSalad from './Greek-salad.jpg'
import bruschetta from  './bruschetta.jpg'
import tresLeches from './Tres-Leches.jpg'
import bio from './bio-picture.png'
import './main.css'

function Main(){
return (
<main>
    <section className='specialTitle'>
        <h2>Special</h2>
        <button>Online Menu</button>
    </section>

    <section className='menuHightlights'> 
        <article>
            <img src={greekSalad} />
            <p>Best salad you will Ever try!</p>
        </article>

        <article>
            <img src={bruschetta} />
            <p>Baguette with chops tomatos, best in the city</p>
        </article>

        <article>
            <img src={tresLeches} />
            <p>Sweet and teasty dessert, even if you don'
                like sweet, you will like this.
            </p>
        </article>

    </section>

    <section className='specialTitle'>
        <h2>Testimonials</h2>
    </section>

    <section className='menuHightlights'> 
        <article>
            <img src={greekSalad} />
            <p>Best restaurant I been at, keep it up!</p>
        </article>

        <article>
            <img src={bruschetta} />
            <p>the food was amazing anf the employees even better</p>
        </article>

        <article>
            <img src={tresLeches} />
            <p>everything went as good as expected, best choice
                of place to eat in the city
            </p>
        </article>
    </section>

    <section className='bio'>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <article>
            <p>Family owned restaurant. We welcome you yo our second home, 
                if you ever want to enjoy this moment and feel like at home, Come vist us!
            </p>
            <img src={bio} />
        </article>
    </section>
</main>)
}
export default Main;