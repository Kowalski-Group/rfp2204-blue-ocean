const data = [
	{
		title: 'Adele - Rolling In The Deep (Karaoke with Lyrics)',
		id: 'SRn4Fh47kok',
	},
	{
		title: "Alicia Keys - If I Ain't Got You (Karaoke with Lyrics)",
		id: 'YhV-SF8jeHc',
	},
	{
		title: 'Bonnie Tyler - Total Eclipse of the Heart (Karaoke With Lyrics)',
		id: 'pnJRZU4oAi8',
	},
	{
		title:
			'Creedence Clearwater Revival - Have You Ever Seen The Rain (Karaoke with Lyrics)',
		id: 'P9UUrX4lwPk',
	},
	{
		title: 'The Carpenters - Top Of The World (Karaoke With Lyrics)',
		id: 'LxKPsEefblc',
	},
	{
		title: "Céline Dion - It's All Coming Back To Me Now (Karaoke With Lyrics)",
		id: 'BxBjEIncjtM',
	},
	{
		title: 'Scorpions - Wind Of Change (Karaoke With Lyrics)',
		id: 'AAPRtwEp82c',
	},
	{
		title: 'Your Man - Josh Turner (Karaoke video with lyrics- No Lead Vocal)',
		id: 'xEYd27snxCg',
	},
	{
		title: 'Sister Act 2 - Oh Happy Day (Karaoke With Lyrics)',
		id: 'fKR-aQ0UglY',
	},
	{
		title: 'Céline Dion - All By Myself (Karaoke With Lyrics)',
		id: 'lHufESqfZXQ',
	},
	{
		title: 'She Will Be Loved: Maroon 5 | Karaoke with lyrics',
		id: 'zJmVq8-p1CE',
	},
	{
		title:
			'Elton John - Sorry Seems To Be The Hardest Word (Karaoke With Lyrics)',
		id: 'vI_Zc6Ngmgg',
	},
	{
		title: 'Etta James - At Last (Karaoke with Lyrics)',
		id: 'qyHE5U9pLAs',
	},
	{
		title:
			"Ain't No Sunshine in the Style of &quot;Bill Withers&quot; karaoke video with lyrics (no lead vocal)",
		id: 'l0u4yd5Z6Kc',
	},
	{
		title: 'Sarah McLachlan - Angel (Karaoke With Lyrics)',
		id: 'Db5cXnnqtiE',
	},
	{
		title: 'Michael Jackson - You Are Not Alone (Karaoke With Lyrics)',
		id: 'za8tMANFyXI',
	},
	{
		title:
			"Jennifer Hudson - And I Am Telling You I'm Not Going (Karaoke with Lyrics)",
		id: 'iCOiaVKD21M',
	},
	{
		title:
			"Otis Redding - (Sittin' On) The Dock Of The Bay (Karaoke With Lyrics)",
		id: 'fcKYWDiqeUU',
	},
	{
		title:
			"Fallin' (Radio Version) in the Style of &quot;Alicia Keys&quot; karaoke video with lyrics (no lead vocal)",
		id: 'Trn3KYG8Jc4',
	},
	{
		title:
			"I Don't Want To Miss A Thing in the Style of &quot;Aerosmith&quot; karaoke video with lyrics (no lead vocal)",
		id: 'Y3CjJ8iQmPk',
	},
	{
		title: 'Snow Patrol - Chasing Cars (Karaoke With Lyrics)',
		id: 'wGJCB8nd5Bw',
	},
	{
		title: 'Lynyrd Skynyrd - Simple Man (Karaoke with Lyrics)',
		id: 'I_B-pwD-rLw',
	},
	{
		title:
			'Demons in the Style of &quot;Imagine Dragons&quot; karaoke video with lyrics (no lead vocal)',
		id: 'fXRM9fXYzto',
	},
	{
		title:
			'Top Of The World in the Style of &quot;Carpenters&quot; karaoke video with lyrics (with lead vocal)',
		id: 'PDAaArbnuSU',
	},
	{
		title: 'Rehab in the style of Amy Winehouse karaoke video with lyrics',
		id: 'w42pSGRICag',
	},
	{
		title: 'Kings Of Leon - Use Somebody (Karaoke With Lyrics)',
		id: 'eDJvl8J0j-0',
	},
	{
		title: 'Evanescence - Bring Me To Life (Karaoke With Lyrics)',
		id: '8nS4ylMD5xw',
	},
	{
		title: 'Creedence Clearwater Revival - Proud Mary (Karaoke with Lyrics)',
		id: 'SgD4oxR1_Hw',
	},
	{
		title: 'Bill Withers - Lean On Me (Karaoke with Lyrics)',
		id: 'juBHK0RRG2Y',
	},
	{
		title:
			'When You Say Nothing At All in the Style of &quot;Alison Krauss &amp; Union Station&quot; (no lead vocal)',
		id: 'z-kzKOaK3-s',
	},
	{
		title:
			'Bad Romance in the Style of &quot;Lady Gaga&quot; karaoke video with lyrics (no lead vocal)',
		id: 'pyp2fnjiegU',
	},
	{
		title: 'Britney Spears - Oops!...I Did It Again (Karaoke with Lyrics)',
		id: 'jLA_OvsSGQs',
	},
	{
		title:
			"1 HOUR BEST OF '80s &amp; '90s MUSIC | Karaoke with Lyrics presented by @Stingray Karaoke",
		id: 'nhBqryez_Zw',
	},
	{
		title:
			'You Raise Me Up (Radio Version) in the Style of &quot;Josh Groban&quot; with lyrics (no lead vocal)',
		id: 'stuaXQkWIwY',
	},
	{
		title: 'Adele - Chasing Pavements',
		id: 'LrW7Umr_5wM',
	},
	{
		title:
			'No Air in the Style of &quot;Jordin Sparks &amp; Chris Brown&quot; karaoke video with lyrics (no lead vocal)',
		id: 'KoJacQfAB3k',
	},
	{
		title:
			'Making Love Out Of Nothing At All in the Style of &quot;Air Supply&quot; karaoke with lyrics (no lead vocal)',
		id: 'Bom0W1Dnh9o',
	},
	{
		title: 'Whitney Houston - Greatest Love Of All (Karaoke With Lyrics)',
		id: '58pTjCH2Abk',
	},
	{
		title:
			"Can't Fight This Feeling in the Style of &quot;REO Speedwagon&quot; karaoke video with lyrics (no lead vocal)",
		id: 'f-9Eesk_89Q',
	},
	{
		title:
			'Wherever You Will Go (Radio Version) in the Style of &quot;The Calling&quot; with lyrics (no lead vocal)',
		id: 'm1uSme8TkPY',
	},
	{
		title: 'Elvis Presley - The Wonder Of You (Karaoke with Lyrics)',
		id: 't-4ZMeWR1S8',
	},
	{
		title: 'Madonna - Material Girl (Karaoke with Lyrics)',
		id: 'Dm64sW1Q31Y',
	},
	{
		title:
			'O Holy Night in the Style of &quot;Celine Dion&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Tm7XMQlzCqM',
	},
	{
		title:
			"We've Only Just Begun in the Style of &quot;Carpenters&quot; karaoke video with lyrics (no lead vocal)",
		id: 'rWVAHXMISKU',
	},
	{
		title:
			'Stand By Me in the style of &quot;Ben E. King&quot; karaoke video with lyrics (no lead vocal)',
		id: 'tWO88Hz5gbI',
	},
	{
		title: 'Billy Joel - Piano Man (Karaoke with Lyrics)',
		id: 'KXrKCVILWN8',
	},
	{
		title:
			"Can't Smile Without You in the style of Barry Manilow karaoke video with lyrics",
		id: 'lYd58fpaEws',
	},
	{
		title:
			'Lately in the Style of &quot;Stevie Wonder&quot; karaoke video with lyrics (no lead vocal)',
		id: 'vwRfiPO0630',
	},
	{
		title: 'Apologize in the style of OneRepublic karaoke video with lyrics',
		id: '2LNcOM7H6DM',
	},
	{
		title: 'My Boo - Usher, Alicia Keys (Karaoke with Lyrics - No Lead Vocal)',
		id: 'L7S-JV5FFZg',
	},
	{
		title:
			'Out Here On My Own in the style of Irene Cara karaoke video with lyrics (no lead vocal)',
		id: '3MspfyxCIZM',
	},
	{
		title:
			'Blue Suede Shoes by Elvis Presley - Karaoke video with lyrics (no lead vocal)',
		id: 'kP3uWmARb5c',
	},
	{
		title:
			'Amazing Grace in the Style of &quot;Traditional&quot; karaoke video with lyrics (no lead vocal)',
		id: 'ZsXBZPWhPRs',
	},
	{
		title: 'Aretha Franklin - Respect (Karaoke with Lyrics)',
		id: 'dLEa9c0-C3Y',
	},
	{
		title:
			'Always Be My Baby in the Style of &quot;Mariah Carey&quot; karaoke video with lyrics (no lead vocal)',
		id: 'dhgkVlm4aWE',
	},
	{
		title: "Frank Sinatra - That's Life (Karaoke with Lyrics)",
		id: 'hYsLfEUSUY8',
	},
	{
		title: 'Love Story in the style of Taylor Swift  karaoke Video',
		id: 'XnQbyr5vkFc',
	},
	{
		title:
			'Ode To My Family by The Cranberries - Karaoke video with lyrics (no lead vocal)',
		id: '3Z7zXWKnF-c',
	},
	{
		title:
			"Can't Help Falling In Love in the Style of &quot;Elvis Presley&quot; with lyrics (no lead vocal)",
		id: 'G85NWxqj4yY',
	},
	{
		title:
			'Help! in the Style of &quot;The Beatles&quot; karaoke video with lyrics (with lead vocal)',
		id: 'DAUlZYAF5oY',
	},
	{
		title:
			'DJ Jazzy Jeff &amp; The Fresh Prince: Fresh Prince Of Bel-Air | Karaoke with Lyrics (no lead vocal)',
		id: 'awHmEWQPDxE',
	},
	{
		title:
			'I Want It That Way in the Style of &quot;Backstreet Boys&quot; karaoke video with lyrics (no lead vocal)',
		id: 'kXXQVir7yTw',
	},
	{
		title:
			'Hero (Radio Version) in the Style of &quot;Enrique Iglesias&quot; karaoke video with lyrics (no lead vocal)',
		id: 'YM7iaf7Na8I',
	},
	{
		title:
			'Help! in the Style of &quot;The Beatles&quot; karaoke video with lyrics (no lead vocal)',
		id: 'avnVW9frwLE',
	},
	{
		title:
			'Tears Dry On Their Own in the Style of &quot;Amy Winehouse&quot; karaoke video with lyrics (no lead vocal)',
		id: 'rb4NPORJg2k',
	},
	{
		title:
			"California Dreamin' in the Style of &quot;The Mamas &amp; The Papas&quot; with lyrics (no lead vocal)",
		id: 'paTYxzcjOBU',
	},
	{
		title: 'Sweet Dreams in the style of Beyonce karaoke video version',
		id: '8hZmmoI4K2Q',
	},
	{
		title:
			'Folsom Prison Blues in the style of &quot;Johnny Cash&quot; with lyrics (no lead vocal)',
		id: '2MyLh9o2c04',
	},
	{
		title:
			"TOP 30 BEST KARAOKE WITH LYRICS from the '60s, '70s, '80s, '90s, 2000's and Today! 2 HOURS NON STOP",
		id: 'ypcVYB9T32o',
	},
	{
		title:
			'Shape Of My Heart in the Style of &quot;Backstreet Boys&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Wt_ruR9jVeE',
	},
	{
		title:
			'Candle In The Wind in the Style of &quot;Elton John&quot; karaoke video with lyrics (no lead vocal)',
		id: 'uM7J98XFcaI',
	},
	{
		title:
			'Life Is A Highway in the Style of &quot;Rascal Flatts&quot; karaoke lyrics (no lead vocal)',
		id: 'Yg6gonfSiRg',
	},
	{
		title:
			'Take On Me in the Style of &quot;a-ha&quot; karaoke video with lyrics (no lead vocal)',
		id: '82ND_6aPyEM',
	},
	{
		title:
			"I'm Like A Bird in the style of Nelly Furtado karaoke video with lyrics no lead vocal",
		id: 'SyBaHvh3FIo',
	},
	{
		title:
			'God Bless The U.S.A. in the Style of &quot;Lee Greenwood&quot; karaoke video with lyrics (no lead vocal)',
		id: 'TmBMCYXtxPU',
	},
	{
		title:
			'As Long As You Love Me in the Style of &quot;Backstreet Boys&quot; karaoke lyrics (no lead vocal)',
		id: 'PpYbCMOyogQ',
	},
	{
		title:
			'The Gambler in the Style of &quot;Kenny Rogers&quot; karaoke video with lyrics (with lead vocal)',
		id: 'l8bJOwbILts',
	},
	{
		title:
			'How To Save A Life in the Style of &quot;The Fray&quot; karaoke video with lyrics (no lead vocal)',
		id: 'JjzWGI8X55g',
	},
	{
		title:
			'Listen To Your Heart (Unplugged Version) in the Style of &quot;D.H.T.&quot; with lyrics (no lead vocal)',
		id: 'HYQAWgoFKH4',
	},
	{
		title: 'Love Song in the style of Sara Bareilles',
		id: '3KNLaQhONlk',
	},
	{
		title:
			'Rumour Has It in the Style of &quot;Adele&quot; karaoke video with lyrics (no lead vocal)',
		id: 'tgWU-jRITGc',
	},
	{
		title:
			'Karaoke Version: Pompeii in the Style of &quot;Bastille&quot; with lyrics (no lead vocal)',
		id: '8JENMXlwFVQ',
	},
	{
		title:
			"BEST KARAOKE SONGS OF ALL TIME (VOL. 2): BEST MUSIC from the '80s', '90s &amp; Y2K by @Stingray Karaoke",
		id: 'bv_MQnwbWA4',
	},
	{
		title:
			'My Immortal (Radio Version) in the Style of &quot;Evanescence&quot; with lyrics (no lead vocal)',
		id: 'b4455WTckFI',
	},
	{
		title: 'Gloria Gaynor - I Will Survive (Karaoke with Lyrics)',
		id: 'HwzIjdiNlhM',
	},
	{
		title: 'Bubbly in the style of Colbie Caillat karaoke video',
		id: '4Fp3_zzIZig',
	},
	{
		title:
			'American Honey in the style of &quot;Lady Antebellum&quot; karaoke video with lyrics (no lead vocal)',
		id: '2U1lBWcYtgg',
	},
	{
		title: 'Your Love: The Outfield | Karaoke with lyrics',
		id: 'LzDVr1b5x54',
	},
	{
		title: 'Paranoid: Black Sabbath | Karaoke with lyrics (no lead vocal)',
		id: '4QT_QfN887U',
	},
	{
		title:
			'This Love in the Style of &quot;Maroon 5&quot; with lyrics (no lead vocal)',
		id: '38f_4GPr7nI',
	},
	{
		title:
			'How Am I Supposed To Live Without You in the Style of &quot;Michael Bolton&quot; karaoke video with lyrics',
		id: 'pCGT9U7KeJc',
	},
	{
		title: 'Free Bird: Lynyrd Skynyrd | Karaoke with lyrics (no lead vocal)',
		id: 'co4pi6eC1C8',
	},
	{
		title: "When You're Gone in the style of The Cranberries karaoke video",
		id: 'zWMzTEK5hEs',
	},
	{
		title:
			'Russian Roulette in the style of Rihanna karaoke video version with lyrics',
		id: 'w8PPg8pIrTQ',
	},
	{
		title:
			'A Broken Wing: Martina McBride | Karaoke with lyrics (no lead vocal)',
		id: 'D-c9mqsHRSU',
	},
	{
		title: 'La donna e mobile | Karaoke with lyrics (no lead vocal)',
		id: 'P0NMlOi2cbk',
	},
	{
		title: 'Handy Man: James Taylor | Karaoke with lyrics',
		id: 'rAosf7d-dp8',
	},
	{
		title:
			'Telephone in the style of &quot;Lady Gaga&quot; karaoke video with lyrics (no lead vocal)',
		id: 'fV6MlYlQcDg',
	},
	{
		title:
			'I Turn To You in the style of Christina Aguilera, karaoke video version with lyrics',
		id: '0Bl2UF0DKT8',
	},
	{
		title:
			'Speak Now in the Style of &quot;Taylor Swift&quot; karaoke video with lyrics (no lead vocal)',
		id: 'DKrf7OhkJ5A',
	},
	{
		title:
			'Speak Now in the Style of &quot;Taylor Swift&quot; karaoke video with lyrics (no lead vocal)',
		id: 'DKrf7OhkJ5A',
	},
	{
		title:
			'Always On My Mind in the Style of &quot;Elvis Presley&quot; karaoke video with lyrics no lead vocal',
		id: 'edxtF-W81KY',
	},
	{
		title:
			'Dreamer in the Style of &quot;Ozzy Osbourne&quot; with lyrics (no lead vocal)',
		id: 'LQC8i8Xlwrs',
	},
	{
		title:
			'All I Want For Christmas: Justin Bieber &amp; Mariah Carey | Karaoke with lyrics',
		id: 'dqyc0_6BP-8',
	},
	{
		title:
			"BEST OF '80s &amp; '90s MUSIC in Karaoke with Lyrics presented by @Stingray Karaoke",
		id: 'E-iidk3e26Q',
	},
	{
		title: 'Gives You Hell: The All-American Rejects | Karaoke with lyrics',
		id: 'oNT-m4tAUnw',
	},
	{
		title:
			"Diamonds Are A Girl's Best Friend in the Style of &quot;Marilyn Monroe&quot; with lyrics (no lead vocal)",
		id: 'FA8Wh5oo5Tc',
	},
	{
		title:
			'MEGA HITS: BEST FEMALE KARAOKE WITH LYRICS 💖 LORDE, BEYONCE, JESSIE J, TAYLOR SWIFT, ADELE, RIHANNA',
		id: 'U0maM4yuOMI',
	},
	{
		title:
			"It's Not Unusual in the Style of &quot;Tom Jones&quot; karaoke lyrics (no lead vocal)",
		id: '1kHCFVh3cBI',
	},
	{
		title:
			'Simple Man in the Style of &quot;Shinedown&quot; karaoke video with lyrics (no lead vocal)',
		id: 'u7W3lWelyHw',
	},
	{
		title:
			'The Way We Were in the Style of &quot;Barbra Streisand&quot; karaoke video with lyrics (no lead vocal)',
		id: 'nSte5gJ685I',
	},
	{
		title:
			'Hit Me With Your Best Shot: Pat Benatar | Karaoke with lyrics (no lead vocal)',
		id: 'YscRzIhuDLw',
	},
	{
		title: 'Secrets: OneRepublic | Karaoke with lyrics (no lead vocal)',
		id: 'bNRMH1ejctw',
	},
	{
		title:
			'Happy Birthday: Stevie Wonder | Karaoke with lyrics (with lead vocal)',
		id: 'TsaR9HqSqFM',
	},
	{
		title:
			"(I've Had) The Time Of My Life (Duet): Bill Medley &amp; Jennifer Warnes | Karaoke with lyrics",
		id: 'HbbWhwVJFiA',
	},
	{
		title:
			'Love Is All Around in the Style of &quot;Wet Wet Wet&quot; karaoke video with lyrics (no lead vocal)',
		id: 'qFS17oVRZio',
	},
	{
		title:
			'Zombie in the Style of &quot;The Cranberries&quot; karaoke video with lyrics (no lead vocal)',
		id: 'muHW6HMVp5U',
	},
	{
		title:
			'Karma Chameleon in the Style of &quot;Culture Club&quot; with lyrics (no lead vocal)',
		id: 'kmmvx8Z-F7s',
	},
	{
		title:
			'She Will Be Loved in the Style of &quot;Maroon 5&quot; karaoke video with lyrics (with lead vocal)',
		id: 'i7W89E2kHbk',
	},
	{
		title:
			'Save The Best For Last in the Style of &quot;Vanessa L. Williams&quot; with lyrics (no lead vocal)',
		id: 'EX9kQOyeBuQ',
	},
	{
		title:
			'Alejandro in the style of &quot;Lady Gaga&quot; karaoke video with lyrics (no lead vocal)',
		id: 'OEaUKIFMilw',
	},
	{
		title:
			'For The First Time in the Style of &quot;The Script&quot; karaoke video with lyrics (no lead vocal)',
		id: 'sEjTdzittxk',
	},
	{
		title:
			'Vanilla Twilight in the Style of &quot;Owl City&quot; karaoke video with lyrics (no lead vocal)',
		id: 'B7HMDObic1o',
	},
	{
		title:
			'E lucevan le stelle in the Style of &quot;Traditional&quot; karaoke video with lyrics (no lead vocal)',
		id: 'W8_6NApHMaU',
	},
	{
		title:
			'Dreaming Of You in the Style of &quot;Selena&quot; with lyrics (no lead vocal)',
		id: 'SV1xE4OSII0',
	},
	{
		title:
			'Born To Be Wild in the Style of &quot;Steppenwolf&quot; karaoke video with lyrics (no lead vocal)',
		id: 'QwbFVDwNcsc',
	},
	{
		title:
			'Adorn in the Style of &quot;Miguel&quot; karaoke with lyrics (no lead vocal)',
		id: 'LNDY9LOX0KU',
	},
	{
		title:
			'Me And Bobby McGee in the style of &quot;Janis Joplin&quot; karaoke video with lyrics',
		id: 'mCKGrnbWsF0',
	},
	{
		title:
			'Fearless in the Style of &quot;Taylor Swift&quot; karaoke video with lyrics (no lead vocal)',
		id: 'RqwGX2rldyw',
	},
	{
		title:
			'December, 1963 (Oh, What A Night) in the style of The 4 Seasons karaoke video',
		id: '6ebWrqcO0yI',
	},
	{
		title:
			'Ho Hey in the Style of &quot;The Lumineers&quot; karaoke video with lyrics (no lead vocal)',
		id: 'sDmnZPAJ7j0',
	},
	{
		title: 'Ke$ha- Tik Tok (Karaoke With Lyrics)',
		id: 'y9x7qt9QNno',
	},
	{
		title:
			"Don't It Make My Brown Eyes Blue in the Style of &quot;Crystal Gayle&quot; karaoke with lyrics (no lead vocal)",
		id: 'd_WmEOIP42Y',
	},
	{
		title:
			'Fantasy in the style of Earth, Wind &amp; Fire karaoke video version with lyrics',
		id: 'S_6flEif07A',
	},
	{
		title:
			'Karaoke Video: Sing Fever in the Style of &quot;Peggy Lee&quot; with lyrics (no lead vocal)',
		id: 'ne3Tgfc95gI',
	},
	{
		title:
			"It's Not Unusual in the Style of &quot;Tom Jones&quot; karaoke video with lyrics (with lead vocal)",
		id: 'ZzWRC_V52j0',
	},
	{
		title:
			'I Am A Man Of Constant Sorrow in the Style of &quot;The Soggy Bottom Boys&quot; with lyrics (no lead vocal)',
		id: 'Dx4KTykMM_M',
	},
	{
		title:
			'Iron Man in the Style of &quot;Black Sabbath&quot; karaoke video with lyrics (no lead vocal)',
		id: 'X6hPvnYfhA8',
	},
	{
		title:
			'&quot;On Top of the World&quot; in the Style of &quot;Imagine Dragons&quot; karaoke video with lyrics (no lead vocal)',
		id: 'EzyRm4WHJyg',
	},
	{
		title:
			"Sugar, We're Goin' Down in the Style of &quot;Fall Out Boy&quot; karaoke video with lyrics (no lead vocal)",
		id: 'iFs5tw7wwuQ',
	},
	{
		title:
			'Adore You in the Style of &quot;Miley Cyrus&quot; karaoke video with lyrics (no lead vocal)',
		id: 'nhrA_XX2m8g',
	},
	{
		title:
			'Mine in the Style of &quot;Taylor Swift&quot; karaoke video with lyrics (no lead vocal)',
		id: 'o8YBqnvWhVw',
	},
	{
		title: 'Everlong: Foo Fighters | Karaoke with lyrics (no lead vocal)',
		id: 'FB_1lXUflvc',
	},
	{
		title:
			'Bad Moon Rising in the Style of &quot;Creedence Clearwater Revival&quot; with lyrics (no lead vocal)',
		id: 'ayjDCxuufNc',
	},
	{
		title:
			'Wild Horses in the style of The Rolling Stones karaoke version with lyrics',
		id: '_297blZxrc4',
	},
	{
		title:
			'Nobody Does It Better in the style of Carly Simon karaoke video with lyrics',
		id: 'Nisgi3GBO9Q',
	},
	{
		title:
			'Seasons Of Love in the Style of &quot;Rent (Broadway Version)&quot; with lyrics (no lead vocal)',
		id: 'PANt7BSyZmI',
	},
	{
		title:
			'Rosanna in the Style of &quot;Toto&quot; karaoke video with lyrics (no lead vocal)',
		id: 'jzO7wdJAk4k',
	},
	{
		title: '9 In The Afternoon in the style of Panic! At The Disco',
		id: 'APUuKf_PLS0',
	},
	{
		title:
			'I Drove All Night in the style of Celine Dion, karaoke video with lyrics',
		id: 'RdaLG-nwx8E',
	},
	{
		title:
			'Crazy in the Style of &quot;Patsy Cline&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Ruck_YhhJHg',
	},
	{
		title:
			'Stand By Your Man in the Style of &quot;Tammy Wynette&quot; karaoke video with lyrics (no lead vocal)',
		id: '1NXeGwmgfrU',
	},
	{
		title:
			'(You Drive Me) Crazy in the Style of &quot;Britney Spears&quot;  karaoke video with lyrics (no lead vocal)',
		id: 'a1evHn0eSOQ',
	},
	{
		title:
			'Hello Again in the Style of &quot;Neil Diamond&quot; karaoke video with lyrics (no lead vocal)',
		id: 'TuslNVyPH28',
	},
	{
		title:
			"Can't Hold Us in the Style of &quot;Macklemore &amp; Ryan Lewis feat. Ray Dalton&quot; with lyrics (no lead vocal)",
		id: 'lEsD3VrNQpA',
	},
	{
		title:
			'Who Knew in the style of &quot;Pink&quot; karaoke video with lyrics (no lead vocal)',
		id: '6vMR7DdKQfk',
	},
	{
		title:
			'Superstition in the Style of &quot;Stevie Wonder&quot; karaoke video with lyrics (no lead vocal)',
		id: 'GcQaKfpBAww',
	},
	{
		title:
			'I Feel Pretty in the Style of &quot;West Side Story (Movie Version)&quot; with lyrics (no lead vocal)',
		id: '8v4oiIrBB2I',
	},
	{
		title:
			'Coming Home in the Style of &quot;Diddy - Dirty Money feat. Skylar Grey&quot; with lyrics (no lead vocal)',
		id: 'dcKCbLngWas',
	},
	{
		title:
			'Si No Te Hubiera Conocido in the style of Luis Fonsi karaoke video duet with lyrics',
		id: 'Mrb_3EUi09s',
	},
	{
		title:
			'Where Could I Go But To The Lord in the Style of &quot;Elvis Presley&quot; with lyrics (no lead vocal)',
		id: '5gEGUAfeyeQ',
	},
	{
		title:
			'Nothing Like Us in the Style of &quot;Justin Bieber&quot; karaoke video with lyrics (no lead vocal)',
		id: '1I7sxUGWGzw',
	},
	{
		title:
			'Poison in the Style of &quot;Alice Cooper&quot; karaoke video with lyrics (no lead vocal)',
		id: 'YYncOcyMfhc',
	},
	{
		title:
			'Fly in the Style of &quot;Nicki Minaj feat. Rihanna&quot; karaoke video with lyrics (no lead vocal)',
		id: 'HNpJyPCDNFc',
	},
	{
		title:
			'Change The World in the style of &quot;Eric Clapton&quot; karaoke video with lyrics',
		id: '1ONCX95fb7o',
	},
	{
		title:
			"A Woman's Worth in the Style of &quot;Alicia Keys&quot; karaoke video with lyrics (no lead vocal)",
		id: 's_aU9u6VqI4',
	},
	{
		title:
			'Amsterdam in the Style of &quot;Imagine Dragons&quot; karaoke video with lyrics (no lead vocal)',
		id: 'AqBtnkQW1jg',
	},
	{
		title:
			'Africa in the Style of &quot;Toto&quot; with lyrics (no lead vocal)',
		id: 'E6phnCBu1cI',
	},
	{
		title:
			'Crimson And Clover in the style of Joan Jett &amp; The Blackhearts - karaoke video',
		id: 'OIM7RAu6qEE',
	},
	{
		title: 'Kryptonite in the style of 3 Doors Down',
		id: 'APw2kSVZeP0',
	},
	{
		title: 'Cyndi Lauper - All Through The Night (Karaoke With Lyrics)',
		id: '-Uv9ERMpV2U',
	},
	{
		title:
			"It's Still Rock And Roll To Me in the Style of &quot;Billy Joel&quot; with lyrics (no lead vocal)",
		id: 'yvXA9nNEWPM',
	},
	{
		title: 'Love Gun in the style of Kiss karaoke video with lyrics',
		id: 'Q6BxQlY523c',
	},
	{
		title:
			'Could I Have This Kiss Forever (Duet) in the Style of &quot;Whitney Houston feat. Enrique Iglesias&quot;',
		id: 'jhQNFQttbPQ',
	},
	{
		title:
			'You Are The Sunshine Of My Life in the Style of &quot;Stevie Wonder&quot; with lyrics (no lead vocal)',
		id: '5dPj76VIRy0',
	},
	{
		title:
			'Same Love (Duet) in the Style of &quot;Macklemore &amp; Ryan Lewis feat. Mary Lambert&quot; (no lead vocal)',
		id: 'g7m8lGWdwxM',
	},
	{
		title:
			'Fairytale of New York (Duet) in the Style of &quot;The Pogues feat. Kirsty MacColl&quot; karaoke video',
		id: '9uGuvWL4EwI',
	},
	{
		title:
			'Picture To Burn in the style of Taylor Swift karaoke video with lyrics no lead vocal',
		id: 'stJgR_rFmbc',
	},
	{
		title:
			"When I Get Where I'm Going in the Style of &quot;Brad Paisley feat. Dolly Parton&quot; (no lead vocal)",
		id: 'Z8mHaWmXgbE',
	},
	{
		title:
			'Your Song in the Style of &quot;Elton John&quot; with lyrics (no lead vocal)',
		id: 'ne2ekNXfK1o',
	},
	{
		title:
			'Daydream Believer in the style of The Monkees karaoke video with lyrics (no lead vocal)',
		id: 'rM2_2y3t6d4',
	},
	{
		title:
			'Stubborn Love in the Style of &quot;The Lumineers&quot; karaoke video with lyrics (no lead vocal)',
		id: '2X26rs6WIQs',
	},
	{
		title:
			'Little Lion Man in the Style of &quot;Mumford &amp; Sons&quot; karaoke video with lyrics (no lead vocal)',
		id: 'AdQ3QK1uQiY',
	},
	{
		title:
			"Like You'll Never See Me Again in the style of Alicia Keys karaoke version with lyrics",
		id: '9YXs5qMahQ0',
	},
	{
		title:
			'From Me To You in the style of The Beatles karaoke video with lyrics',
		id: '2i99IdOi1L0',
	},
	{
		title: "3 HOURS NON STOP KARAOKE WITH LYRICS - BEST OF '80s MIX PARTY",
		id: 'ytRWEdjf9lk',
	},
	{
		title:
			"Don't Let The Sun Go Down On Me in the Style of &quot;Elton John&quot; with lyrics (no lead vocal)",
		id: 'EkEnGNavsdg',
	},
	{
		title:
			'Ring My Bell in the Style of &quot;Anita Ward&quot; karaoke video with lyrics (no lead vocal)',
		id: '29Trb-pkrH4',
	},
	{
		title:
			'The Cave in the Style of &quot;Mumford &amp; Sons&quot; karaoke video with lyrics (with lead vocal)',
		id: '7gQWN7m8GbM',
	},
	{
		title:
			'Girls Just Want To Have Fun in the Style of &quot;Cyndi Lauper&quot; karaoke video with lyrics (no lead vocal)',
		id: '-wNax22B4wY',
	},
	{
		title:
			'Yankee Doodle in the style of Traditional karaoke video with lyrics (no lead vocal)',
		id: 'XTT2R7k_iN0',
	},
	{
		title:
			'Making Memories Of Us in the style of Keith Urban karaoke video with lyrics',
		id: 'a8rrtT1a8zs',
	},
	{
		title:
			'Wanted in the Style of &quot;Hunter Hayes&quot; karaoke video with lyrics (no lead vocal)',
		id: 'LWi7_kvSJwA',
	},
	{
		title:
			'Move Along in the Style of &quot;The All-American Rejects&quot; karaoke video with lyrics (no lead vocal)',
		id: '3oCkQhhB_C8',
	},
	{
		title:
			'Replay in the style of &quot;Iyaz&quot; karaoke video version with lyrics (no lead vocal)',
		id: 'NfcROj5CYX8',
	},
	{
		title:
			'You Oughta Know in the Style of &quot;Alanis Morissette&quot; with lyrics (no lead vocal)',
		id: 'DgIWBoq9hg0',
	},
	{
		title:
			'Just Like A Pill in the Style of &quot;Pink&quot; karaoke video with lyrics (with lead vocal)',
		id: 'GS8YJRO7zhc',
	},
	{
		title:
			'N.I.B. in the Style of &quot;Black Sabbath&quot; karaoke video with lyrics (no lead vocal)',
		id: 'wS91A1IE2Ic',
	},
	{
		title:
			'The Cave in the Style of &quot;Mumford &amp; Sons&quot; karaoke video with lyrics (no lead vocal)',
		id: 'JlMYNJZYMVM',
	},
	{
		title:
			'Danny Boy in the Style of &quot;Traditional&quot; with lyrics (no lead vocal) karaoke video',
		id: 'l6aPgQjGxQU',
	},
	{
		title:
			'Danny Boy in the Style of &quot;Traditional&quot; with lyrics (no lead vocal) karaoke video',
		id: 'l6aPgQjGxQU',
	},
	{
		title: "BEST OF '90s KARAOKE WITH LYRICS: ULTIMATE PARTY MEGA HITS",
		id: '21MVb1KL6PY',
	},
	{
		title:
			'Gotta Be You in the Style of &quot;One Direction&quot; karaoke video with lyrics (no lead vocal)',
		id: 'i0fcQmvrZvw',
	},
	{
		title:
			"I Don't Want To Miss A Thing in the Style of &quot;Mark Chesnutt&quot; karaoke lyrics (no lead vocal)",
		id: 'oGjNad5_Wk4',
	},
	{
		title:
			"Daddy's Hands in the Style of &quot;Holly Dunn&quot; karaoke video with lyrics (with lead vocal)",
		id: 'e4LkO6l24_k',
	},
	{
		title:
			'Home in the Style of &quot;Daughtry&quot; karaoke video lyrics (no lead vocal)',
		id: 'GspEFe-p_Zo',
	},
	{
		title:
			'Not Fair in the Style of &quot;Lily Allen&quot; karaoke video with lyrics (no lead vocal)',
		id: 'ywYudf81R4A',
	},
	{
		title:
			'I Put A Spell On You in the Style of &quot;Annie Lennox&quot; with lyrics (no lead vocal)',
		id: '1jDou8z-Wio',
	},
	{
		title:
			"Baby, It's Cold Outside (Duet) in the Style of &quot;Ray Charles &amp; Betty Carter&quot; (no lead vocal)",
		id: 'KRMDKJTRb8A',
	},
	{
		title:
			'45 in the Style of &quot;Shinedown&quot; karaoke video with lyrics (no lead vocal)',
		id: 'htlaKP5UtSw',
	},
	{
		title:
			'Paint It Black in the Style of &quot;The Rolling Stones&quot; karaoke with lyrics (no lead vocal)',
		id: 'u0FlMiY-aAk',
	},
	{
		title:
			'The Fear in the Style of &quot;Lily Allen&quot; karaoke video with lyrics (no lead vocal)',
		id: 'YcKxMxZ2nTc',
	},
	{
		title:
			'I Melt With You in the Style of &quot;Modern English&quot; karaoke video with lyrics (no lead vocal)',
		id: 'rFZ06npPv-E',
	},
	{
		title:
			'Over You in the Style of &quot;Daughtry&quot; karaoke video with lyrics (no lead vocal)',
		id: 'hMACTHaRsr8',
	},
	{
		title:
			'The Flesh Failures (Let The Sunshine In) in the style of Hair (Broadway Version) karaoke video',
		id: 'LPQTqzzl9rU',
	},
	{
		title:
			'Tim McGraw in the style of Taylor Swift karaoke video sing-along with lyrics',
		id: 'OQYzx7mYGy4',
	},
	{
		title:
			'Time for Miracles in the style of &quot;Adam Lambert&quot; karaoke video version with lyrics',
		id: 'J0xGHLfSLrE',
	},
	{
		title:
			'Spider-Man Theme in the Style of &quot;Michael Bublé&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Kh7tOyjGhSk',
	},
	{
		title:
			"EPIC '90s MUSIC KARAOKE MIX: Karaoke with Lyrics Non Stop Marathon Best of '90s @Stingray Karaoke",
		id: 'pVxsZIjIlfo',
	},
	{
		title:
			'Stop And Stare in the Style of &quot;OneRepublic&quot; karaoke video with lyrics (no lead vocal)',
		id: 'aMqJQljzGPQ',
	},
	{
		title:
			'Me, Myself And I in the Style of &quot;Beyoncé&quot; with lyrics (no lead vocal)',
		id: 'gF4vnwXPWSI',
	},
	{
		title:
			"A Hard Day's Night in the Style of &quot;The Beatles&quot; karaoke video with lyrics (no lead vocal)",
		id: 'k_OkwRJ4UpM',
	},
	{
		title:
			'Dragostea din tei in the Style of &quot;O-Zone&quot; karaoke video with lyrics (no lead vocal)',
		id: 'rhLnMstOSSg',
	},
	{
		title:
			'You Learn in the style of Alanis Morissette karaoke singalong with lyrics',
		id: '9PqTn7z3eJQ',
	},
	{
		title:
			"I'm Gonna Miss Her in the Style of &quot;Brad Paisley&quot; karaoke video with lyrics (no lead vocal)",
		id: 'tU1aEoA7eCs',
	},
	{
		title:
			'Turn Me On in the Style of &quot;David Guetta feat. Nicki Minaj&quot; with lyrics (no lead vocal)',
		id: 'prvwpuBhwS4',
	},
	{
		title:
			'Sail in the Style of &quot;AWOLNATION&quot; karaoke video with lyrics (no lead vocal)',
		id: 'tbY6eODtsK8',
	},
	{
		title:
			'Only The Good Die Young in the Style of &quot;Billy Joel&quot; karaoke video with lyrics (no lead vocal)',
		id: 'niI7_onhKZk',
	},
	{
		title:
			'When Irish Eyes Are Smiling in the style of Traditional karaoke video with lyrics (no lead vocal)',
		id: 'oGwCHCmkG1U',
	},
	{
		title:
			'Alone in the Style of &quot;Heart&quot; karaoke video with lyrics (no lead vocal)',
		id: 'LENQ2eRnbkU',
	},
	{
		title:
			'Say Hey (I Love You) in the style of &quot;Michael Franti &amp; Spearhead &amp; Cherine Anderson&quot; karaoke video',
		id: '6JkQtZ0PDKM',
	},
	{
		title:
			'The Devil Went Down To Georgia in the Style of &quot;Charlie Daniels Band&quot; with lyrics (with lead vocal)',
		id: 'WWGF-0tlca4',
	},
	{
		title:
			'Luck Be A Lady in the Style of &quot;Frank Sinatra&quot; with lyrics (no lead vocal)',
		id: 'mgm5OCtkP4M',
	},
	{
		title:
			'Sukiyaki in the style of A Taste Of Honey karaoke version with lyrics',
		id: 'xnYooQ1Ywqg',
	},
	{
		title:
			'Round And Round in the Style of &quot;Imagine Dragons&quot; with lyrics (no lead vocal)',
		id: 'hApl7JX0A5c',
	},
	{
		title:
			'Elton John, Dua Lipa - Cold Heart (PNAU Remix) (Karaoke with Lyrics)',
		id: 'CvwkoT-kSBg',
	},
	{
		title:
			'Pump Up The Jam in the Style of &quot;Technotronic&quot; karaoke video with lyrics (no lead vocal)',
		id: 'WyRis5rbgoQ',
	},
	{
		title:
			'If I Never See Your Face Again in the Style of &quot;Maroon 5 feat. Rihanna&quot; with lyrics (no lead vocal)',
		id: 'KWqOhF4Ihes',
	},
	{
		title:
			'Since U Been Gone in the style of &quot;Kelly Clarkson&quot; karaoke video with lyrics',
		id: '4nTcu5WtTZM',
	},
	{
		title: 'Taylor Swift - Shake It Off (Karaoke with Lyrics)',
		id: 'YiPE3U3QN1I',
	},
	{
		title:
			'Borderline in the style of &quot;Madonna&quot; karaoke video with lyrics (no lead vocal)',
		id: 'GDJ6oG-JkaA',
	},
	{
		title:
			'Play That Funky Music in the Style of &quot;Wild Cherry&quot; with lyrics (no lead vocal)',
		id: 'zqr2bn62M7w',
	},
	{
		title: 'The Rock Show in the style of blink-182 karaoke video with lyrics',
		id: 'i9U35hnYUMk',
	},
	{
		title:
			'Kung Fu Fighting in the Style of &quot;Carl Douglas&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Fw5USgo6aP0',
	},
	{
		title:
			'Blank Space in the Style of &quot;Taylor Swift&quot; with lyrics (no lead vocal)',
		id: 'vD4JrW36Ang',
	},
	{
		title:
			'I Was Made For Loving You in the Style of &quot;Kiss&quot; with lyrics (no lead vocal)',
		id: 'zklt_Wkx4Wk',
	},
	{
		title:
			'Sharp Dressed Man in the Style of &quot;ZZ Top&quot; with lyrics (no lead vocal)',
		id: '8H1dMcl3-jM',
	},
	{
		title:
			'Rosanna in the Style of &quot;Toto&quot; karaoke video with lyrics (with lead vocal)',
		id: 'Hbeeoe6VtAk',
	},
	{
		title:
			'Fire Burning in the style of &quot;Sean Kingston&quot; karaoke video with lyrics',
		id: '4sb5diW6AZA',
	},
	{
		title:
			'Radar in the style of Britney Spears karaoke video version with lyrics',
		id: 'Yr8pAedMYwg',
	},
	{
		title:
			'1985 in the Style of &quot;Bowling for Soup&quot; karaoke video with lyrics (no lead vocal)',
		id: 'IRqoNXEpoXM',
	},
	{
		title:
			'September in the Style of &quot;Earth, Wind &amp; Fire&quot; karaoke video with lyrics (no lead vocal)',
		id: 'V81sR30RPU8',
	},
	{
		title:
			'We Built This City in the Style of &quot;Starship&quot; karaoke video with lyrics (no lead vocal)',
		id: 'tMMsTJ5sfo8',
	},
	{
		title:
			"Love Shack (Duet) in the Style of &quot;The B-52's&quot; with lyrics (no lead vocal)",
		id: 'HcR9yHaBOC4',
	},
	{
		title:
			'Under The Boardwalk in the Style of &quot;The Drifters&quot; with lyrics (no lead vocal)',
		id: 'L2-4CMEz3FA',
	},
	{
		title:
			"Lady Marmalade in the Style of &quot;Mya, Christina Aguilera, Lil' Kim &amp; Pink&quot; (no lead vocal)",
		id: 'aMqJR0OyLL8',
	},
	{
		title:
			'White Horse in the Style of &quot;Taylor Swift&quot; karaoke video with lyrics (no lead vocal)',
		id: 'uW6csnVeTWE',
	},
	{
		title:
			'Womanizer in the style of &quot;Britney Spears&quot; karaoke video with lyrics (no lead vocal)',
		id: 'ONGF2BZ_hsQ',
	},
	{
		title:
			'(I Never Promised You A) Rose Garden in the style of Martina McBride karaoke video',
		id: 'ldgaujkCwTI',
	},
	{
		title:
			'A Thousand Miles in the Style of &quot;Vanessa Carlton&quot; with lyrics (no lead vocal)',
		id: 'CTLJG7UK49w',
	},
	{
		title: 'Feeling Good in the style of Michael Bublé | Karaoke with Lyrics',
		id: 'oJoQL7pLhnk',
	},
	{
		title:
			'Molly Malone (Cockles &amp; Mussels) in the Style of &quot;Traditional&quot; with lyrics (no lead vocal)',
		id: '2APe1ypRt0Y',
	},
	{
		title:
			'O Canada (English) in the Style of &quot;Traditional&quot; karaoke video with lyrics (no lead vocal)',
		id: '-ze27oHhB3k',
	},
	{
		title:
			'God Must Have Spent A Little More Time On You in the style of Alabama',
		id: 'lAxVtnUs234',
	},
	{
		title:
			'Forever in the Style of &quot;Chris Brown&quot; karaoke video with lyrics (no lead vocal)',
		id: 'evYtKbK-3pM',
	},
	{
		title:
			'Heartbreaker in the Style of &quot;Pat Benatar&quot; karaoke video with lyrics (with lead vocal)',
		id: '5qBeyAeB0ME',
	},
	{
		title:
			'Better Days in the style of Goo Goo Dolls karaoke video with lyrics',
		id: '1RmzAkHozFA',
	},
	{
		title:
			'Heaven in the Style of &quot;DJ Sammy &amp; Yanou&quot; karaoke video with lyrics (no lead vocal)',
		id: 'NN-mz24sbwQ',
	},
	{
		title:
			'Chasing The Sun in the Style of &quot;The Wanted&quot; karaoke video with lyrics (no lead vocal)',
		id: 'hrYeRuLpxjk',
	},
	{
		title:
			'LoveGame in the Style of &quot;Lady Gaga&quot; karaoke video with lyrics (no lead vocal)',
		id: '-y9rIc2CGVw',
	},
	{
		title:
			'Flaws in the Style of &quot;Bastille&quot; karaoke video with lyrics (no lead vocal)',
		id: 'YYGoUZngtG0',
	},
	{
		title:
			'Have A Little Faith In Me in the Style of &quot;Mandy Moore&quot; karaoke video with lyrics (no lead vocal)',
		id: 't017-X_f6o8',
	},
	{
		title:
			'Stay in the Style of &quot;Hurts&quot; karaoke video with lyrics (no lead vocal)',
		id: 'w2JPZJfOETg',
	},
	{
		title:
			"BEST OF '80s KARAOKE WITH LYRICS: Toni Basil, Bonnie Tyler, Cyndi Lauper, Rick Astley",
		id: 'grPxTMCGjRQ',
	},
	{
		title:
			"We Got The Beat in the Style of &quot;Go-Go's&quot; karaoke video with lyrics (no lead vocal)",
		id: 'q_mgS0IB0_k',
	},
	{
		title:
			"Maybe I'm Amazed in the Style of &quot;Paul McCartney&quot; with lyrics (no lead vocal)",
		id: '17wLc6F97XQ',
	},
	{
		title:
			'Jackson (Duet) in the style of Johnny Cash &amp; June Carter | Karaoke with Lyrics',
		id: 'wOejWnlrd7Q',
	},
	{
		title:
			'Like The Way I Do in the Style of &quot;Melissa Etheridge&quot; with lyrics (no lead vocal)',
		id: '3fGs6Shp-kM',
	},
	{
		title: 'Frosty the Snowman - Traditional (Karaoke With Lyrics)',
		id: '8hINXuDyyvs',
	},
	{
		title: 'Word Up in the style of Cameo karaoke video',
		id: 'iuWP3vI-jVw',
	},
	{
		title: 'Taylor Swift - Out of the Woods (Karaoke With Lyrics)',
		id: 'PjdUQY8QBdY',
	},
	{
		title: 'Hallelujah - Pentatonix (Karaoke with Lyrics)',
		id: 'k0QAHBAPRW8',
	},
	{
		title:
			'Cowboy Casanova in the style of &quot;Carrie Underwood&quot; karaoke video with lyrics',
		id: 'MIlc2uswPto',
	},
	{
		title:
			'What the Hell in the Style of &quot;Avril Lavigne&quot; karaoke video with lyrics (no lead vocal)',
		id: '1A9dtcUktSY',
	},
	{
		title:
			'MEGA HITS 2020: BEST FEMALE KARAOKE WITH LYRICS 💖 BILLIE EILISH, ARIANA GRANDE, DUA LIPA, CARDI B',
		id: 'OY5TumPcwhg',
	},
	{
		title:
			'Run It! in the style of &quot;Chris Brown&quot; karaoke video with lyrics (no lead vocal)',
		id: 'fTYaFQdefMA',
	},
	{
		title:
			'So Emotional in the Style of &quot;Whitney Houston&quot; karaoke video with lyrics (no lead vocal)',
		id: 'vdZ9viMtsqA',
	},
	{
		title:
			'Let Me Go in the Style of &quot;3 Doors Down&quot; karaoke video with lyrics (no lead vocal)',
		id: '0HDmjqMX99w',
	},
	{
		title:
			"BEST KARAOKE SONGS OF ALL TIME (VOL. 3): BEST MUSIC from the '70s, '80s', '90s &amp; Y2K by Stingray",
		id: 'fm0I4MTw4Lc',
	},
	{
		title: 'The KARAOKE Channel App for LG Smart TVs',
		id: '5mY0h8bsXRM',
	},
	{
		title:
			'Blue Suede Shoes in the Style of &quot;Elvis Presley&quot; karaoke video with lyrics (with lead vocal)',
		id: '0CWaNSXyvOY',
	},
	{
		title:
			'Sweet Sacrifice in the Style of &quot;Evanescence&quot; karaoke video with lyrics (no lead vocal)',
		id: 'QwAbI7m5gf8',
	},
	{
		title:
			'Little Lies in the Style of &quot;Fleetwood Mac&quot; with lyrics (no lead vocal)',
		id: 'yRhZ4R9v8Xo',
	},
	{
		title:
			'Mustang Sally in the Style of &quot;Wilson Pickett&quot; with lyrics (no lead vocal)',
		id: 'he7PCHqnmIw',
	},
	{
		title:
			'Uninvited in the Style of &quot;Alanis Morissette&quot; with lyrics (with lead vocal)',
		id: 'iHyHR6pjroM',
	},
	{
		title: 'Everything Is Everything in the style of Lauryn Hill',
		id: 'soqFZrDLbOU',
	},
	{
		title:
			"I'd Do Anything For Love (But I Won't Do That) in the Style of &quot;Meat Loaf&quot; karaoke video",
		id: 'hAOcXledTbc',
	},
	{
		title: 'Country Road in the style of James Taylor karaoke video',
		id: 'n6jh4H6zuWE',
	},
	{
		title:
			"This Train Don't Stop There Anymore in the style of Elton John karaoke video",
		id: 'NbeUHldDU3M',
	},
	{
		title:
			"Untitled (How Does It Feel) in the style of D'angelo karaoke singalong lyrics",
		id: 'U05LlncTQ5s',
	},
	{
		title:
			'Got My Mind Set On You in the Style of &quot;George Harrison&quot; with lyrics (no lead vocal)',
		id: 'Phyosh15FCs',
	},
	{
		title:
			'Shake It in the style of Metro Station karaoke video with lyrics no lead vocal',
		id: 'tWILZafSDKc',
	},
	{
		title:
			'Cosmic Love in the Style of &quot;Florence + the Machine&quot; with lyrics (no lead vocal)',
		id: 'Ut5542EpUbs',
	},
	{
		title: 'Fifteen: Taylor Swift | Karaoke with lyrics (no lead vocal)',
		id: 'JNXnzC-wtmA',
	},
	{
		title:
			'BEST KARAOKE SONGS WITH LYRICS: Cardi B, Post Malone, Justin Bieber, Ariana Grande, BLACKPINK',
		id: '9lY-8umIsKo',
	},
	{
		title:
			'The Twist in the Style of &quot;Chubby Checker&quot; karaoke video with lyrics (no lead vocal)',
		id: '0ZdH8BQ5Tyc',
	},
	{
		title:
			"I'll Be Home For Christmas in the Style of &quot;Linda Ronstadt&quot; with lyrics (no lead vocal)",
		id: 'EJ5vgSeqdpI',
	},
	{
		title:
			'Hasta la raíz in the style of Natalia Lafourcade | Karaoke with Lyrics',
		id: 'T4iPMw0ONz8',
	},
	{
		title:
			'Achy Breaky Song in the style of &quot;Weird&quot; Al Yankovic karaoke sing along with lyrics',
		id: '-O8BjDRWyEE',
	},
	{
		title:
			'Butterflies in the Style of &quot;Michael Jackson&quot; with lyrics (no lead vocal)',
		id: 'Yit7yeGKjUg',
	},
	{
		title:
			"Nothin' On You in the Style of &quot;B.o.B. feat. Bruno Mars&quot; with lyrics (no lead vocal)",
		id: 'Red6ZNsSauc',
	},
	{
		title: 'Fidelity in the style of Regina Spektor karaoke video',
		id: 'NlzfEHp0qnU',
	},
	{
		title:
			'Raise Your Glass in the Style of &quot;Pink&quot; karaoke video with lyrics (no lead vocal)',
		id: 'zdV8rQQOGp0',
	},
	{
		title:
			'TOP SONGS 2021 : BEST KARAOKE WITH LYRICS (Lil Nas X, Justin Bieber, Olivia Rodrigo, Billie Eilish)',
		id: 'TUKf4uCQsdU',
	},
	{
		title:
			'Space Oddity in the Style of &quot;David Bowie&quot; with lyrics (no lead vocal)',
		id: '67xWcIQhXL4',
	},
	{
		title: '3 HOURS NON STOP KARAOKE PARTY with @Stingray Karaoke',
		id: 'WiVuYFXiS14',
	},
	{
		title:
			'Mariah Carey - All I Want for Christmas Is You (Karaoke with Lyrics)',
		id: 'Pr3s0DR2Q6Q',
	},
	{
		title:
			"It's My Life in the Style of &quot;No Doubt&quot; with lyrics (no lead vocal)",
		id: 's8NIc8z77Ao',
	},
	{
		title: 'I Fall To Pieces in the style of LeAnn Rimes karaoke video',
		id: 'GU2BpLXwMGo',
	},
	{
		title:
			"OLD TIME KARAOKE CLASSICS: Best of '60s &amp; '70s Music: Queen, Cher, Aretha Franklin, Lynyrd Skynyrd",
		id: 'NX9Hbedrqmg',
	},
	{
		title:
			'Dreamgirls in the Style of &quot;Beyoncé, Jennifer Hudson &amp; Anika Noni Rose&quot; with lyrics (no lead vocal)',
		id: '16MNPD_2j9g',
	},
	{
		title:
			'Hold Me in the Style of &quot;Whitney Houston &amp; Teddy Pendergrass&quot; with lyrics (no lead vocal)',
		id: 'ybPgsVbvAOk',
	},
	{
		title:
			'The Wild Rover in the Style of &quot;Traditional&quot; with lyrics (no lead vocal) Karaoke Video',
		id: 'VGuxMnYQJEc',
	},
	{
		title:
			"You Can't Always Get What You Want in the Style of &quot;The Rolling Stones&quot; karaoke lyrics no lead vocal",
		id: 'tyG3w0YkQZM',
	},
	{
		title:
			"Jumpin' Jack Flash in the Style of &quot;The Rolling Stones&quot; karaoke video with lyrics (no lead vocal)",
		id: 'n5MjdtH1e_M',
	},
	{
		title:
			'How Do You Like Me Now?! in the Style of &quot;Toby Keith&quot; with lyrics (no lead vocal)',
		id: 'SWfoaglCcO0',
	},
	{
		title: '24K Magic : Bruno Mars | Karaoke with Lyrics',
		id: 'GJ0NuUrJZHw',
	},
	{
		title:
			'Skinny Love in the Style of &quot;Birdy&quot; with lyrics (no lead vocal)',
		id: 'poadWcmdM58',
	},
	{
		title:
			'I Feel Pretty in the Style of &quot;West Side Story (Movie Version)&quot; with lyrics (with lead vocal)',
		id: 'wOU0d4pitNA',
	},
	{
		title:
			'Baby, I Love Your Way in the Style of &quot;Peter Frampton&quot; with lyrics (no lead vocal)',
		id: 'pUg7tce5au8',
	},
	{
		title: 'Unpretty in the style of TLC karaoke video with lyrics',
		id: 'dZjMTLAjG_0',
	},
	{
		title:
			'Hero/Heroine in the Style of &quot;Boys Like Girls&quot; karaoke video with lyrics (no lead vocal)',
		id: 'VjsIStDy8gE',
	},
	{
		title:
			'I Want Crazy in the Style of &quot;Hunter Hayes&quot; karaoke video with lyrics (no lead vocal)',
		id: 'JSMjyFhgzBY',
	},
	{
		title:
			'Paradise By The Dashboard Light in the Style of &quot;Meat Loaf&quot; with lyrics (no lead vocal)',
		id: 'nWldwwQ9rw8',
	},
	{
		title:
			'She Wolf (Falling To Pieces) in the style of David Guetta feat. Sia | Karaoke with Lyrics',
		id: '7gOrhTejIdw',
	},
	{
		title:
			'My Girl in the Style of &quot;The Temptations&quot; karaoke video with lyrics (no lead vocal)',
		id: 'foYJiXbbhaU',
	},
	{
		title:
			'Come Sail Away in the Style of &quot;Styx&quot; with lyrics (no lead vocal)',
		id: 'JpqEukPrb4Q',
	},
	{
		title:
			"I'm Just A Singer (In A Rock And Roll Band) in the style of The Moody Blues karaoke video",
		id: 'vYUg0VN2gVo',
	},
	{
		title:
			'We Are Golden in the Style of &quot;Mika&quot; with lyrics (no lead vocal)',
		id: 'xilH2iH9-14',
	},
	{
		title:
			'Only Happy When It Rains in the Style of &quot;Garbage&quot; with lyrics (no lead vocal)',
		id: 'a3-R9Ct4GMw',
	},
	{
		title:
			'(Night Time Is) The Right Time in the Style of &quot;Ray Charles&quot; with lyrics (no lead vocal)',
		id: '1tTTsZWn6OM',
	},
	{
		title:
			'Weird Science in the Style of &quot;Oingo Boingo&quot; karaoke video with lyrics (no lead vocal)',
		id: 'BOAvM8zk5Yw',
	},
	{
		title: 'Tina Turner - Proud Mary (Karaoke With Lyrics)',
		id: '4skz0LHaxpk',
	},
	{
		title:
			'Dynamite in the Style of &quot;Taio Cruz&quot; karaoke video with lyrics (no lead vocal)',
		id: 'o80y38s2RGM',
	},
	{
		title:
			"Baby, It's Cold Outside (Duet) in the Style of &quot;Ray Charles &amp; Betty Carter&quot; (with lead vocal)",
		id: 'yL_o__nTTHA',
	},
	{
		title:
			'Just Might (Make Me Believe) in the Style of &quot;Sugarland&quot; karaoke video with lyrics (no lead vocal)',
		id: 'ZQT5Ye7oMH4',
	},
	{
		title:
			'Rhythm Divine in the Style of &quot;Enrique Iglesias&quot; with lyrics (no lead vocal)',
		id: 'wwf-S6jzwd4',
	},
	{
		title:
			'Party Rock Anthem in the Style of &quot;LMFAO&quot; karaoke video with lyrics (with lead vocal)',
		id: 'aK_YH_RmmK0',
	},
	{
		title:
			'Anytime in the Style of &quot;Brian McKnight&quot; with lyrics (no lead vocal)',
		id: 'nDc-R-w7Buk',
	},
	{
		title: 'Baby I in the style of Ariana Grande | Karaoke with Lyrics',
		id: 'C8S_bPP8BSc',
	},
	{
		title:
			"It's The Most Wonderful Time Of The Year in the Style of &quot;Traditional&quot; with lyrics (no lead vocal)",
		id: 'oSR7LzygkiE',
	},
	{
		title:
			"BEST OF '90s HIP HOP: 2Pac,The Notorious B.I.G., Lauryn Hill, Kris Kross (KARAOKE WITH LYRICS)",
		id: 'dvjVdlgt0Qs',
	},
	{
		title: 'The Winner Takes It All in the style of ABBA | Karaoke with Lyrics',
		id: 'Vjg_IaRfwKw',
	},
	{
		title:
			'I Am A Man Of Constant Sorrow in the Style of &quot;The Soggy Bottom Boys&quot; with lyrics (with lead vocal)',
		id: 'JxIChS0HgvQ',
	},
	{
		title:
			"BEST KARAOKE SONGS OF ALL TIME (VOL. 4): BEST MUSIC from the '70s, '80s', '90s &amp; Y2K by Stingray",
		id: 'HwICT7iekvM',
	},
	{
		title:
			'Famous Last Words Of A Fool in the style of George Strait karaoke video',
		id: 'A876qNLe2kY',
	},
	{
		title:
			'So What (Radio Version) in the Style of &quot;Pink&quot; with lyrics (no lead vocal)',
		id: 'ikNTCUkSJIE',
	},
	{
		title: 'Rude in the style of MAGIC! | Karaoke with Lyrics',
		id: 'f2bvth-2iy8',
	},
	{
		title:
			'Taxman in the Style of &quot;The Beatles&quot; karaoke video with lyrics (no lead vocal)',
		id: 'sQeVlr4WWw4',
	},
	{
		title: 'Losing My Religion in the style of R.E.M. | Karaoke with Lyrics',
		id: 'fS00RnTkGNE',
	},
	{
		title: 'Still in the style of Brian McKnight karaoke video with lyrics',
		id: '43VCc01vxYA',
	},
	{
		title:
			'Take On Me in the Style of &quot;a-ha&quot; with lyrics (with lead vocal)',
		id: 'mvaA6iJDxb4',
	},
	{
		title:
			"Can't Buy Me Love: The Beatles | Karaoke with lyrics (no lead vocal)",
		id: 'smYVErDtx1U',
	},
	{
		title:
			"TOP 10 BEST KARAOKE SONGS FROM THE '80s &amp; '90s | Eric Clapton, Wham!, Lou Bega, Bonnie Tyler &amp; More!",
		id: 'grFFDv-uvfU',
	},
	{
		title: 'Counting Stars in the style of OneRepublic | Karaoke with Lyrics',
		id: 'q-rMIlzbnU8',
	},
	{
		title:
			'Holy, Holy, Holy in the style of Traditional karaoke video with lyrics',
		id: 'nWB1ZZrjdYQ',
	},
	{
		title: 'Lizzo - About Damn Time (Karaoke With Lyrics)@Stingray Karaoke',
		id: 'xJLJkMi7GkY',
	},
	{
		title:
			'FUN KARAOKE SONGS to Sing with Friends And Family | Epic Karaoke Playlist by  @Stingray Karaoke',
		id: 'sdQWAFtgIB4',
	},
	{
		title: "It's My Life in the style of Bon Jovi | Karaoke with Lyrics",
		id: 'lYYoti2s4no',
	},
	{
		title:
			'Man In The Mirror in the style of Michael Jackson | Karaoke with Lyrics',
		id: 'g-cNUddrQFk',
	},
	{
		title:
			"Highway Don't Care in the Style of &quot;Tim McGraw feat. Taylor Swift&quot; with lyrics (no lead vocal)",
		id: 'Mlr2ZlXbID8',
	},
	{
		title:
			'Everywhere I Go in the style of Amy Grant karaoke version with lyrics',
		id: 'Pz51Uc_ADhc',
	},
	{
		title: 'Crystal Ball in the style of Styx karaoke video with lyrics',
		id: 'hZn6G5fcBJY',
	},
	{
		title: "Fishin' In The Dark : Nitty Gritty Dirt Band | Karaoke with Lyrics",
		id: 'DOhmAuoSdWI',
	},
	{
		title:
			"TOP 10 BEST SONGS From The '60s | Karaoke with Lyrics by @Stingray Karaoke",
		id: 'VrzCrnTRtCw',
	},
	{
		title: 'Mamma Mia in the style of ABBA | Karaoke with Lyrics',
		id: 'nRVZaiC0wms',
	},
	{
		title: 'Galileo in the style of Indigo Girls karaoke video',
		id: 'A25sUTo78t8',
	},
	{
		title: 'Turbo Lover in the style of Judas Priest karaoke video',
		id: '8_UiAUOGFfU',
	},
	{
		title:
			"SOFT ROCK SONGS: BEST OF '70s, '80s &amp; '90s (1 HOUR) | Karaoke with Lyrics by @Stingray Karaoke",
		id: 'kp1nhNHFpkY',
	},
	{
		title: 'The End Of The World : Skeeter Davis | Karaoke with Lyrics',
		id: 'rfC566t2HhI',
	},
	{
		title:
			'Say Something in the Style of &quot;A Great Big World &amp; Christina Aguilera&quot; with lyrics (no lead vocal)',
		id: 'dgBlfaaINyI',
	},
	{
		title:
			'Boogie Woogie Santa Claus in the Style of &quot;The Brian Setzer Orchestra&quot; with lyrics (no lead vocal)',
		id: 'do8YmQFL4eI',
	},
	{
		title:
			'Nobody But Me in the Style of &quot;Blake Shelton&quot; karaoke video with lyrics (no lead vocal)',
		id: '34NjJ0Jh5DY',
	},
	{
		title:
			'11 in the Style of &quot;Cassadee Pope&quot; with lyrics (no lead vocal)',
		id: 'fwHwjam2hrk',
	},
	{
		title: 'Snow Patrol - Chasing Cars (Karaoke with Lyrics)',
		id: 'ckbqOTFyF1M',
	},
	{
		title:
			'Rockabye in the style of Clean Bandit feat. Sean Paul &amp; Anne-Marie | Karaoke with Lyrics',
		id: 'EzqccanLD3c',
	},
	{
		title: 'Hallelujah : Pentatonix | Karaoke with Lyrics',
		id: 'eayCSYTBLAs',
	},
	{
		title:
			'Crazy Dreams in the Style of &quot;Carrie Underwood&quot; karaoke video with lyrics (no lead vocal)',
		id: 'Usc_vZI5gqw',
	},
	{
		title: "She's Always A Woman : Billy Joel | Karaoke with Lyrics",
		id: 'H-a_wW522ic',
	},
	{
		title: 'What Christmas Means To Me : Stevie Wonder | Karaoke with Lyrics',
		id: '4AY6MgZ0S7s',
	},
	{
		title: "Chasin' You : Morgan Wallen | Karaoke with Lyrics",
		id: 'mg3MWjtQVQ0',
	},
	{
		title:
			'Call Me Maybe in the style of Carly Rae Jepsen | Karaoke with Lyrics',
		id: 'TOSKpkFU5yo',
	},
	{
		title:
			'Independence Day in the Style of &quot;Martina McBride&quot; karaoke video with lyrics (no lead vocal)',
		id: 'hm3xywMN7wo',
	},
	{
		title: "If I Can't Have You : Shawn Mendes | Karaoke with Lyrics",
		id: 'qEGA5rQ_F6s',
	},
	{
		title:
			"These Boots Are Made For Walkin' in the style of Nancy Sinatra | Karaoke with Lyrics",
		id: 'RfZ7hUogAOA',
	},
	{
		title: 'Así Fue in the style of Juan Gabriel | Karaoke with Lyrics',
		id: 'xM3k0wO8Gxg',
	},
	{
		title:
			'Cheerleader (Felix Jaehn Remix) in the style of Omi | Karaoke with Lyrics',
		id: 'wt7IqavOjkg',
	},
	{
		title: 'KALEO - Way Down We Go (Karaoke with Lyrics)',
		id: '_v486Sei3pI',
	},
	{
		title:
			"BEST KARAOKE SONGS OF ALL TIME (VOL. 6): BEST MUSIC from the '70s, '80s', '90s &amp; Y2K by Stingray",
		id: 'NbdAlvkij14',
	},
	{
		title:
			'Give Me Everything in the Style of &quot;Pitbull feat. Ne-Yo &amp; Afrojack &amp; Nayer&quot; (with lead vocal)',
		id: 'E6L6EebIH5o',
	},
	{
		title: 'Peaceful Easy Feeling : Eagles | Karaoke with Lyrics',
		id: 'hkiGqOjn4aQ',
	},
	{
		title: 'Deacon Blues in the style of Steely Dan | Karaoke with Lyrics',
		id: 'XMqzPaM2KUo',
	},
	{
		title: 'Louis Armstrong - What A Wonderful World (Karaoke with Lyrics)',
		id: 'ZmVkt7T1NFM',
	},
	{
		title: 'Sammy Davis Jr - The Candy Man (Karaoke with Lyrics)',
		id: 'Ej3bv8WU1Mk',
	},
	{
		title:
			'BEST KARAOKE WITH LYRICS- 1 Hour Non Stop Songs Medley - Selena Gomez, Adele, Taylor Swift, Dua Lipa',
		id: '6uJ0bgHRh5k',
	},
	{
		title:
			'El Perdedor in the style of Enrique Iglesias feat. Marco Antonio Solís | Karaoke with Lyrics',
		id: 'QBsw8nnYpwA',
	},
	{
		title:
			'Tennessee Whiskey in the style of Chris Stapleton | Karaoke with Lyrics',
		id: 'I-lJyoQunkI',
	},
	{
		title: "Sam Smith - I'm Not The Only One (Karaoke with Lyrics)",
		id: '8oXUOajiIxA',
	},
	{
		title:
			'Laserlight in the Style of &quot;Jessie J feat. David Guetta&quot; with lyrics (no lead vocal)',
		id: 'Mv-f1CjkZN8',
	},
	{
		title:
			'Bizarre Love Triangle (Radio Version) in the style of New Order | Karaoke with Lyrics',
		id: 'WCVgqCp-WNc',
	},
	{
		title:
			'EARLY 2000s HITS KARAOKE WITH LYRICS: @Kylie Minogue @Alicia Keys @blink-182 @Vanessa Carlton',
		id: 'tMmM4F68Hs0',
	},
	{
		title: 'Take A Chance On Me in the style of ABBA | Karaoke with Lyrics',
		id: 'Op182z-cNP4',
	},
	{
		title: 'Healing Hands in the style of Elton John karaoke video',
		id: 'cjvmQrURkFc',
	},
	{
		title: 'Bobby Helms - Jingle Bell Rock (Karaoke With Lyrics)',
		id: '3hxgiRpcn-w',
	},
	{
		title: 'Blow in the Style of &quot;Kesha&quot; with lyrics (no lead vocal)',
		id: 'FnUa5YaWi9E',
	},
	{
		title: "Stingray Kids' Karaoke",
		id: 'qgOspmKOX0s',
	},
	{
		title:
			'Do You Hear What I Hear in the style of Bing Crosby | Karaoke with Lyrics',
		id: 'MCfDsMMtNLM',
	},
	{
		title:
			'Hit The Road Jack in the style of Ray Charles | Karaoke with Lyrics',
		id: 'JwQ5Z8vlCmo',
	},
	{
		title:
			"TOP HITS - BEST OF PLAYLIST - KARAOKE WITH LYRICS  -  BEST OF '80s, '90s &amp; Today MUSIC",
		id: 'BnOny4vKMM0',
	},
	{
		title: "You Keep Me Hangin' On in the style of Vanilla Fudge",
		id: 'WSpqACfTsvA',
	},
	{
		title: 'Imagine Dragons - Enemy (Karaoke with Lyrics)',
		id: '0RcRWiFGhhE',
	},
	{
		title: "Send Me Some Lovin' in the style of Sam Cooke karaoke video",
		id: 'RJzNAkl96G0',
	},
	{
		title: "KARAOKE WITH LYRICS MEGA MIX : BEST OF '80s",
		id: 'neCvVba95L4',
	},
	{
		title: 'Juice WRLD - Bandit ft. NBA Youngboy (Karaoke with Lyrics)',
		id: '0hSiiyru2V4',
	},
	{
		title:
			'BEST KARAOKE SONGS OF ALL TIME (VOL. 10): BEST MUSIC from Alicia Keys, Michael Bublé, David Bowie',
		id: 'K4Mi39LQ91s',
	},
	{
		title: 'Push It : Salt-N-Pepa | Karaoke with Lyrics',
		id: 'PbhHYd2k-Zc',
	},
	{
		title: 'Fly Me To The Moon : Frank Sinatra | Karaoke with Lyrics',
		id: '9dfhXajY01g',
	},
	{
		title: 'Billy Ray Cyrus - Achy Breaky Heart (Karaoke With Lyrics)',
		id: 'EVGLDmzTYWo',
	},
	{
		title: 'Wanted Dead Or Alive : Bon Jovi | Karaoke with Lyrics',
		id: 'zNDT0SdLPF4',
	},
	{
		title: 'Bad Guy : Billie Eilish | Karaoke with Lyrics',
		id: 'CtWdCLMPtEA',
	},
	{
		title: "Rapper's Delight : Sugarhill Gang | Karaoke with Lyrics",
		id: 'osESkGcNkY4',
	},
	{
		title: 'S.O.S. : ABBA | Karaoke with Lyrics',
		id: 'jvZD3fRDInU',
	},
	{
		title: 'Love Somebody in the style of Rick Springfield karaoke video',
		id: 'X5i2l83ejeU',
	},
	{
		title: 'ABBA - Mamma Mia (Karaoke With Lyrics)',
		id: 'iCt0fQlUw3c',
	},
	{
		title:
			'Yo te recuerdo in the style of Juan Gabriel feat. Marc Anthony | Karaoke with Lyrics',
		id: 'PgMs7Vyk1vg',
	},
	{
		title: 'Try in the style of Pink | Karaoke with Lyrics',
		id: 'X5QYV26wu4M',
	},
	{
		title:
			"Takin' It To The Streets : The Doobie Brothers | Karaoke with Lyrics",
		id: 'Ahrn944--24',
	},
	{
		title: 'Cars in the style of Gary Numan karaoke video with lyrics',
		id: 'JIq5ufZu4lY',
	},
	{
		title: 'Billion Dollar Babies in the style of Alice Cooper',
		id: '1sNlKjk8yvI',
	},
	{
		title: 'King Of Pain : The Police | Karaoke with Lyrics',
		id: 'OI7jEMgzu-U',
	},
	{
		title: 'We Wish You a Merry Christmas - Traditional (Karaoke with Lyrics)',
		id: 'XA7AnqpYfAQ',
	},
	{
		title: 'Get Down On It : Kool &amp; The Gang | Karaoke with Lyrics',
		id: 'NbaI4bdSyQE',
	},
	{
		title:
			"Motown Greatest Hits of The '60s | Best Motown Songs Of All Time in Karaoke Version",
		id: 'SfZGeln-khw',
	},
	{
		title: 'Jolene : Dolly Parton | Karaoke with Lyrics',
		id: 'uMCO-2dFlBg',
	},
	{
		title: 'Cher - Strong Enough (Karaoke With Lyrics)',
		id: '0AMhlUge0mU',
	},
	{
		title: "Aerosmith - I Don't Want to Miss a Thing (Karaoke With Lyrics)",
		id: 'pLc0yw7a_Rk',
	},
	{
		title: 'Marry You : Bruno Mars | Karaoke with Lyrics',
		id: 'kkLuN8tCEPo',
	},
	{
		title:
			'🎤 BEST KARAOKE WITH LYRICS (1 HOUR) 🎶 Non Stop Karaoke Party Presented by @Stingray Karaoke',
		id: 'zEUYsSaY9y4',
	},
	{
		title: 'Lady Gaga - Hold My Hand (Karaoke With Lyrics)',
		id: 'I3TVy4Jp6Xo',
	},
	{
		title:
			'Harry Styles - Late Night Talking (Karaoke With Lyrics)@Stingray Karaoke',
		id: 'b22Sd5AtS3c',
	},
	{
		title: 'Mabel, 24kGoldn - Overthinking (Karaoke With Lyrics)',
		id: 'F9AF0HhJ3H0',
	},
];

export default data;
