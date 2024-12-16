import { Injectable } from '@angular/core';

export interface Message {
  cardName: string;
  body: string;
  subject: string;
  imgsrc: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      cardName: 'El Loco',
      body: 'You lose 10,000 XP, discard this card, and draw from the deck again, counting both draws as one of your declared draws. If losing that much XP would cause you to lose a level, you instead lose an amount that leaves you with just enough XP to keep your level.',
      subject: 'Fool',
      imgsrc: '../../assets/cards/00 - The Fool.jpg',
      id: 0
    },
    {
      cardName: 'El Mago',
      body: 'Reality\'s fabric unravels and spins anew, allowing you to avoid or erase one event as if it never happened. You can use the card\'s magic as soon as you draw the card or at any other time before you die.',
      subject: 'The Fates',
      imgsrc: '../../assets/cards/01 - The Magician.jpg',
      id: 1
    },
    {
      cardName: 'La Sacerdotisa',
      body: 'The card\'s medusa-like visage curses you. You take a -2 penalty on saving throws while cursed in this way. Only a god or the magic of The Fates card can end this curse.',
      subject: 'Euryale',
      imgsrc: '../../assets/cards/02 - The High Priestess.jpg',
      id: 2
    },
    {
      cardName: 'La Emperatriz',
      body: 'Twenty-five pieces of jewelry worth 2,000 gp each or fifty gems worth 1,000 gp each appear at your feet.',
      subject: 'Gem',
      imgsrc: '../../assets/cards/03 - The Empress.jpg',
      id: 3
    },
    {
      cardName: 'El Emperador',
      body: 'You gain proficiency in the Persuasion skill, and you double your proficiency bonus on checks made with that skill. In addition, you gain rightful ownership of a small keep somewhere in the world. However, the keep is currently in the hands of monsters, which you must clear out before you can claim the keep as yours.',
      subject: 'Throne',
      imgsrc: '../../assets/cards/04 - The Emperor.jpg',
      id: 4
    },
    {
      cardName: 'El Sumo Sacerdote',
      body: 'At any time you choose within one year of drawing this card, you can ask a question in meditation and mentally receive a truthful answer to that question. Besides information, the answer helps you solve a puzzling problem or other dilemma. In other words, the knowledge comes with wisdom on how to apply it.',
      subject: 'Vizier',
      imgsrc: '../../assets/cards/05 - The Hierophant.jpg',
      id: 5,
    },
    {
      cardName: 'Los Amantes',
      body: 'You gain the service of a 4th-level fighter who appears in a space you choose within 30 feet of you. The fighter is of the same race as you and serves you loyally until death, believing the fates have drawn him or her to you. You control this character.',
      subject: 'Knight',
      imgsrc: '../../assets/cards/06 - The Lovers.jpg',
      id: 6
    },
    {
      cardName: 'El Carro',
      body: 'A rare or rarer magic weapon with which you are proficient appears in your hands. The DM chooses the weapon.',
      subject: 'Key',
      imgsrc: '../../assets/cards/07 - The Chariot.jpg',
      id: 7
    },
    {
      cardName: 'La Fuerza',
      body: 'If you single-handedly defeat the next hostile monster or group of monsters you encounter, you gain experience points enough to gain one level. Otherwise, this card has no effect.',
      subject: 'Comet',
      imgsrc: '../../assets/cards/08 - Strength.jpg',
      id: 8
    },
    {
      cardName: 'El Ermitaño',
      body: 'A nonplayer character of the DM\'s choice becomes hostile toward you. The identity of your new enemy isn\'t known until the NPC or someone else reveals it. Nothing less than a wish spell or divine intervention can end the NPC\'s hostility toward you.',
      subject: 'Rogue',
      imgsrc: '../../assets/cards/09 - The Hermit.jpg',
      id: 9
    },
    {
      cardName: 'La Rueda de la Fortuna',
      body: 'You gain 10,000 XP, or you can draw two additional cards beyond your declared draws.',
      subject: 'Jester',
      imgsrc: '../../assets/cards/10 - Wheel of Fortune.jpg',
      id: 10
    },
    {
      cardName: 'La Justicia',
      body: 'Your mind suffers a wrenching alteration, causing your alignment to change. Lawful becomes chaotic, good becomes evil, and vice versa. If you are true neutral or unaligned, this card has no effect on you.',
      subject: 'Balance',
      imgsrc: '../../assets/cards/11 - Justice.jpg',
      id: 11
    },
    {
      cardName: 'El Ahorcado',
      body: 'You disappear and become entombed in a state of suspended animation in an extradimensional sphere. Everything you were wearing and carrying stays behind in the space you occupied when you disappeared. You remain imprisoned until you are found and removed from the sphere. You can\'t be located by any divination magic, but a wish spell can reveal the location of your prison. You draw no more cards.',
      subject: 'Donjon',
      imgsrc: '../../assets/cards/12 - The Hanged Man.jpg',
      id: 12
    },
    {
      cardName: 'La Muerte',
      body: 'You summon an avatar of death-a ghostly humanoid skeleton clad in a tattered black robe and carrying a spectral scythe. It appears in a space of the DM\'s choice within 10 feet of you and attacks you, warning all others that you must win the battle alone. The avatar fights until you die or it drops to 0 hit points, whereupon it disappears. If anyone tries to help you, the helper summons its own avatar of death. A creature slain by an avatar of death can\'t be restored to life.',
      subject: 'Skull',
      imgsrc: '../../assets/cards/13 - Death.jpg',
      id: 13
    },
    {
      cardName: 'La Templaza',
      body: 'Every magic item you wear or carry disintegrates. Artifacts in your possession aren\'t destroyed but do vanish.',
      subject: 'Talons',
      imgsrc: '../../assets/cards/14 - Temperance.jpg',
      id: 14
    },
    {
      cardName: 'El Diablo',
      body: 'A powerful devil becomes your enemy. The devil seeks your ruin and plagues your life, savoring your suffering before attempting to slay you. This enmity lasts until either you or the devil dies.',
      subject: 'Flames',
      imgsrc: '../../assets/cards/15 - The Devil.jpg',
      id: 15
    },
    {
      cardName: 'La Torre',
      body: 'This black card spells disaster. Your soul is drawn from your body and contained in an object in a place of the DM\'s choice. One or more powerful beings guard the place. While your soul is trapped in this way, your body is incapacitated. A wish spell can\'t restore your soul, but the spell reveals the location of the object that holds it. You draw no more cards.',
      subject: 'The Void',
      imgsrc: '../../assets/cards/16 - The Tower.jpg',
      id: 16
    },
    {
      cardName: 'La Estrella',
      body: 'Increase one of your ability scores by 2. The score can exceed 20 but can\'t exceed 24.',
      subject: 'Star',
      imgsrc: '../../assets/cards/17 - The Star.jpg',
      id: 17
    },
    {
      cardName: 'La Luna',
      body: 'You are granted the ability to cast the wish spell 1d3 times.',
      subject: 'Moon',
      imgsrc: '../../assets/cards/18 - The Moon.jpg',
      id: 18
    },
    {
      cardName: 'El Sol',
      body: 'You gain 50,000 XP, and a wondrous item (which the DM determines randomly) appears in your hands.',
      subject: 'Sun',
      imgsrc: '../../assets/cards/19 - The Sun.jpg',
      id: 19
    },
    {
      cardName: 'El Juicio',
      body: 'Permanently reduce your Intelligence by 1d4 + 1 (to a minimum score of 1). You can draw one additional card beyond your declared draws.',
      subject: 'Idiot',
      imgsrc: '../../assets/cards/20 - Judgement.jpg',
      id: 20
    },
    {
      cardName: 'El Mundo',
      body: 'All forms of wealth that you carry or own, other than magic items, are lost to you. Portable property vanishes. Businesses, buildings, and land you own are lost in a way that alters reality the least. Any documentation that proves you should own something lost to this card also disappears.',
      subject: 'Ruin',
      imgsrc: '../../assets/cards/21 - The World.jpg',
      id: 21
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
