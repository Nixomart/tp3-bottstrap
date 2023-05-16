export class Song {
     id!: number;
     name!: string;
     play!: string;
     artist!: string;
     image!: string;
     link!: string;
    constructor(id: number = 0, name:string='', artist: string = '', play: string = '', image: string = '', link: string = ''){
        this.id = id;
        this.image = image;
        this.artist = artist;
        this.name = name;
        this.play = play;
        this.link = link;
    }
}
