type section = {
   readonly title: string;
   readonly items: string[]; 
}

export type sections = section[];

const CV: sections = [
    {
        title: 'Who am I',
        items: [
            'Current 11th grade student at SWFLA',
            'Current club leader of <a href="https://github.com/Computerization">Computerization</a>',
            'Developer of <a href="https://github.com/Computerization/Enspire">Enspire</a>',
            'Hardcore MINECRAFTer / Lay Clash Royale player',
        ],
    }
];

export default CV;
