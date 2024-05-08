import { v4 as uuidv4 } from 'uuid';

export class Destination{
    constructor(title, imageUrl, year, season, continent, bookmark){
       this.id = uuidv4();
        this.title = title;
        this.imageUrl = imageUrl;
        this.year = year;
        this.season = season;
        this.continent = continent;
        this.bookmark = bookmark;
    }
}