import greekSalad from './Greek-salad.jpg'
import bruschetta from  './bruschetta.jpg'
import tresLeches from './Tres-Leches.jpg'

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
</main>)
}
export default Main;