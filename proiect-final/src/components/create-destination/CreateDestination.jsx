import { useNavigate } from "react-router-dom";
import "./CreateDestination.css"
export default function CreateDestination(){
const navigate = useNavigate();

    function saveDestination(event){
        event.preventDefault();
        const formElement = event.targer;

        const { title, url, year, season, continent} = formElement;

        const destination = {
            title: title.value,
            imageUrl: url.value,
            year: year.value, 
            season: season.value,
            continent: continent.value,
        };

        fetch("http://localhost:3000/destinations", { method: "POST", body: JSON.stringify(destination)})
        .then(() => navigate ("/"));
        formElement.reset();
    }


    return(
        <form onSubmit={saveDestination}>
            <fieldset>
                <label htmlFor="title">Title</label>
                <input name="title" className="form-input" id="title" type="text" required minLength={5}/>
            </fieldset>

            <fieldset>
                <label htmlFor="imgUrl">Image Url</label>
                <input name="url" className="form-input" type="url" id="imgUrl" required />
            </fieldset>

            <fieldset>
               <label htmlFor="year">Year</label>
               <input name="year" className="form-input" type="string" id="year" required />
            </fieldset>

            <fieldset>
               <label htmlFor="season">Season</label>
               <input name = "season"className="form-input" type="text" id="year" required />
               <select id="season" required>
                <option disabled>Select one</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
               </select>
            </fieldset>

            <fieldset>
               <label htmlFor="continent">Continent</label>
               <input name="continent" className="form-input" type="text" id="continent" required />
               <select id="continent" required>
                <option disabled>Select one</option>
                <option value="europa">Europa</option>
                <option value="asia">Asia</option>
                <option value="africa">Africa</option>
                <option value="south america">South America</option>
                <option value="north america">North America</option>
                <option value="australia">Australia</option>
                <option value="antarctica">Antarctica</option>
               </select>
            </fieldset>

            <button>Save destination</button>

        </form>
    )
}