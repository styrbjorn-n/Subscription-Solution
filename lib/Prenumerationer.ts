import { filterType } from "./Context/filter";

export type PrenumerationType = {
    type: filterType;
    namn: string;
    bild: string;
    pris: number;
    bindningstid: Date;
    Uppsägningstid: string;
    uppsägningsUrl?: string;
    historia: {
        pris: number;
        datum: Date
    }[];
};

export const prenumerationer: PrenumerationType[] = [
    {
        type: "Streaming",
        namn: "NETFLIX",
        bild: "Netflix.png",
        pris: 129,
        bindningstid: new Date("2023-11-24"),
        Uppsägningstid: "2 månader",
        uppsägningsUrl: "",
        historia: [
            {
                pris: 129,
                datum: new Date("2023-10-24")
            },
            {
                pris: 95,
                datum: new Date("2019-01-1")
            }
        ],
    },
    {
        type: "Skola",
        namn: "ADOBE",
        bild: "ADOBE.png",
        pris: 129,
        bindningstid: new Date("2023-11-24"),
        Uppsägningstid: "2 månader",
        uppsägningsUrl: "",
        historia: [],
    },
    {
        type: "Nyheter",
        namn: "Aftonbladet",
        bild: "AFTONBLADET.png",
        pris: 129,
        bindningstid: new Date("2023-11-24"),
        Uppsägningstid: "2 månader",
        uppsägningsUrl: "",
        historia: [],
    },
    {
        type: "Streaming",
        namn: "Disney+",
        bild: "DISNEY+.png",
        pris: 129,
        bindningstid: new Date("2023-11-24"),
        Uppsägningstid: "2 månader",
        uppsägningsUrl: "",
        historia: [],
    },
    {
        type: "Böcker",
        namn: "Storytel",
        bild: "STORYTEL.png",
        pris: 129,
        bindningstid: new Date("2023-11-24"),
        Uppsägningstid: "2 månader",
        uppsägningsUrl: "",
        historia: [],
    },
];