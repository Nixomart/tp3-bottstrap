export class Video {
    id!: number;
    title!: string;
    link!: string;
    channel!: string;
    image!: string;

    constructor(id: number= 0, title: string= '', link:string= '', channel:string= '', image: string = ''){
        this.id = id;
        this.title = title;
        this.link = link;
        this.channel = channel;
        this.image = image;
    }
}
