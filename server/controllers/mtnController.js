const mountain = ['In the late 80s Brett “Kowboy” Kobernick cut a snowboard in half with a hacksaw, using the halves to skin uphill and then attaching them back together for the descent. He is credited as the inventor of the Splitboard. In 1991 Kowboy brought his prototype, crafted with door hinges and odd parts, to Mark "Wally" Wariakois, the founder of Voilé Manufacturing, and they created the Voile splitboard interface. This took backcountry snowboarding to a whole new level.',
'Apocalypse Snow 1983 was the movie that started the snowboarding revolution in Europe. It was one part comic-book fantasy, one part rowdy ski film, and one part awesome nonsense. Villainous mono-skiers try to capture the hero snowboarder to steal the secrets of skiing.',
'The first snowboard ever sold in America was actually called a "Snurfer," combining the words "snow" and "surfer." In 1966, Sherman Poppen of Muskegon Michigan fixed two skis together and added rope for his young daughters to ride down the local dune hills. History was made.',
'The best way to open the door to backcountry skiing is to meet some other backcountry skiers. Seriously.',
'The best advice we can give is to be humble, listen, and be patient. Be smart and ski conservatively in the backcountry. Even the most advanced backcountry skiers reserve their most hard-charging turns for the resort.',
'Avalanches pose very real danger to all winter backcountry travelers. If you want to ski or snowboard in the backcountry, it’s crucial that you enroll in avalanche safety training taught by a qualified professional.']

module.exports = {
    getMountainFact: (req, res) => {
        const randomIndex = Math.floor(Math.random() *mountain.length)
        const randomMountain = mountain[randomIndex]
        res.status(200).send(randomMountain)
    }
};