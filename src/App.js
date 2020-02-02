import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

let imgNames = [ 
'120px-Abaddon_icon.png',
'120px-Alchemist_icon.png',
'120px-Ancient_Apparition_icon.png',
'120px-Anti-Mage_icon.png',
'120px-Arc_Warden_icon.png',
'120px-Axe_icon.png',
'120px-Bane_icon.png',
'120px-Batrider_icon.png',
'120px-Beastmaster_icon.png',
'120px-Bloodseeker_icon.png',
'120px-Bounty_Hunter_icon.png',
'120px-Brewmaster_icon.png',
'120px-Bristleback_icon.png',
'120px-Broodmother_icon.png',
'120px-Centaur_Warrunner_icon.png',
'120px-Chaos_Knight_icon.png',
'120px-Chen_icon.png',
'120px-Clinkz_icon.png',
'120px-Clockwerk_icon.png',
'120px-Crystal_Maiden_icon.png',
'120px-Dark_Seer_icon.png',
'120px-Dark_Willow_icon.png',
'120px-Dazzle_icon.png',
'120px-Death_Prophet_icon.png',
'120px-Disruptor_icon.png',
'120px-Doom_icon.png',
'120px-Dragon_Knight_icon.png',
'120px-Drow_Ranger_icon.png',
'120px-Earth_Spirit_icon.png',
'120px-Earthshaker_icon.png',
'120px-Elder_Titan_icon.png',
'120px-Ember_Spirit_icon.png',
'120px-Enchantress_icon.png',
'120px-Enigma_icon.png',
'120px-Faceless_Void_icon.png',
'120px-Grimstroke_icon.png',
'120px-Gyrocopter_icon.png',
'120px-Huskar_icon.png',
'120px-Invoker_icon.png',
'120px-Io_icon.png',
'120px-Jakiro_icon.png',
'120px-Juggernaut_icon.png',
'120px-Keeper_of_the_Light_icon.png',
'120px-Kunkka_icon.png',
'120px-Legion_Commander_icon.png',
'120px-Leshrac_icon.png',
'120px-Lich_icon.png',
'120px-Lifestealer_icon.png',
'120px-Lina_icon.png',
'120px-Lion_icon.png',
'120px-Lone_Druid_icon.png',
'120px-Luna_icon.png',
'120px-Lycan_icon.png',
'120px-Magnus_icon.png',
'120px-Mars_icon.png',
'120px-Medusa_icon.png',
'120px-Meepo_icon.png',
'120px-Mirana_icon.png',
'120px-Monkey_King_icon.png',
'120px-Morphling_icon.png',
'120px-Naga_Siren_icon.png',
'120px-Nature\'s_Prophet_icon.png',
'120px-Necrophos_icon.png',
'120px-Night_Stalker_icon.png',
'120px-Nyx_Assassin_icon.png',
'120px-Ogre_Magi_icon.png',
'120px-Omniknight_icon.png',
'120px-Oracle_icon.png',
'120px-Outworld_Devourer_icon.png',
'120px-Pangolier_icon.png',
'120px-Phantom_Assassin_icon.png',
'120px-Phantom_Lancer_icon.png',
'120px-Phoenix_icon.png',
'120px-Puck_icon.png',
'120px-Pudge_icon.png',
'120px-Pugna_icon.png',
'120px-Queen_of_Pain_icon.png',
'120px-Razor_icon.png',
'120px-Riki_icon.png',
'120px-Rubick_icon.png',
'120px-Sand_King_icon.png',
'120px-Shadow_Demon_icon.png',
'120px-Shadow_Fiend_icon.png',
'120px-Shadow_Shaman_icon.png',
'120px-Silencer_icon.png',
'120px-Skeleton_King_icon.png',
'120px-Skywrath_Mage_icon.png',
'120px-Slardar_icon.png',
'120px-Slark_icon.png',
'120px-Snapfire_icon.png',
'120px-Sniper_icon.png',
'120px-Spectre_icon.png',
'120px-Spirit_Breaker_icon.png',
'120px-Storm_Spirit_icon.png',
'120px-Sven_icon.png',
'120px-Techies_icon.png',
'120px-Templar_Assassin_icon.png',
'120px-Terrorblade_icon.png',
'120px-Tidehunter_icon.png',
'120px-Timbersaw_icon.png',
'120px-Tinker_icon.png',
'120px-Tiny_icon.png',
'120px-Treant_Protector_icon.png',
'120px-Troll_Warlord_icon.png',
'120px-Tusk_icon.png',
'120px-Underlord_icon.png',
'120px-Undying_icon.png',
'120px-Ursa_icon.png',
'120px-Vengeful_Spirit_icon.png',
'120px-Venomancer_icon.png',
'120px-Viper_icon.png',
'120px-Visage_icon.png',
'120px-Void_Spirit_icon.png',
'120px-Warlock_icon.png',
'120px-Weaver_icon.png',
'120px-Windranger_icon.png',
'120px-Winter_Wyvern_icon.png',
'120px-Witch_Doctor_icon.png',
'120px-Wraith_King_icon.png',
'120px-Zeus_icon.png'];

class App extends Component {
  constructor(props) {
      super(props);

      this.level = 1;
      this.firstCard = null;
      this.secondCard = null;
      this.flippedCards = [];
      this.flipping = null;
      this.state = {
          numbers: []
      }

      this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(card) {
    let first = this.firstCard;
    let second = this.secondCard;

    if (first != null && second != null) {
      return false;
    }

    console.log("number = " + card.number);
    if (first == null) {
      this.firstCard = card;
      console.log("first card = " + this.firstCard.number);
    }
    else if (second == null) {
      this.secondCard = card;
      if (this.firstCard.number === this.secondCard.number) {
        console.log("OK Accept");
        this.flippedCards.push(this.firstCard);
        this.flippedCards.push(this.secondCard);
        this.firstCard = null;
        this.secondCard = null;
      }
      else {
        console.log("Not accept");
        this.flipping = setTimeout(() => {
          if (this.firstCard) this.firstCard.setState({isFlipped: false});
          if (this.secondCard) this.secondCard.setState({isFlipped: false});
          this.firstCard = null;
          this.secondCard = null;
        }, 1000);
      }
    }
    return true;
  }

  componentDidMount() {
    this.setState({numbers: shuffle(8)});
  }

  selectMode(mode) {
    let numCards = 8;
    switch (mode) {
      case GAME_MODE.EASY:
        numCards = 8;
        break;
      case GAME_MODE.NORMAL:
        numCards = 12;
        break;
      case GAME_MODE.HARD:
        numCards = 16;
        break;
      case GAME_MODE.INSANE:
        numCards = 24;
        break;
      default:
        numCards = 8;
    }

    clearTimeout(this.flipping);
    if (this.firstCard) this.firstCard.setState({isFlipped: false});
    if (this.secondCard) this.secondCard.setState({isFlipped: false});
    this.firstCard = null;
    this.secondCard = null;
    for (let i = 0; i < this.flippedCards.length; ++i) {
      if (this.flippedCards[i]) this.flippedCards[i].setState({isFlipped: false});
    }
    this.setState({numbers: shuffle(numCards)});
  }

  render() {
    var numCol = this.state.numbers.length === 24 ? 6 : 4;
    var width = numCol * 184;
    const divStyle = { width: width };

    return (
      <div>
        <div>
          <button onClick={() => this.selectMode(GAME_MODE.EASY)}> EASY </button>
          <button onClick={() => this.selectMode(GAME_MODE.NORMAL)}> NORMAL </button>
          <button onClick={() => this.selectMode(GAME_MODE.HARD)}> HARD </button>
          <button onClick={() => this.selectMode(GAME_MODE.INSANE)}> INSANE </button>
        </div>
        <div className="game-board" style={divStyle}>
        {
          this.state.numbers.map((number, index) => (
            <Card 
              key={index}
              number={number}
              image={imgNames[number]}
              onClickHandle={this.handleCardClick}
            />
          ))
        }
        </div>
      </div>
    );
  }
}

let GAME_MODE = {
  EASY: 1,
  NORMAL: 2,
  HARD: 3,
  INSANE: 4
}

function shuffle(length) {
  if (length % 2) { length--; } // length must be even number

  let array = [];
  for (let i = 0; i < length; ++i) {
    let val = i + 1;
    if (val > length/2) {
      val -= length/2;
    }
    array[i] = val;
  }

  let curIndex = array.length, tempValue, randIndex;

  while (0 !== curIndex) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;

    tempValue = array[curIndex];
    array[curIndex] = array[randIndex];
    array[randIndex] = tempValue;
  }

  // shuffle images
  curIndex = imgNames.length;
  while (curIndex !== 0) {
    randIndex = Math.floor(Math.random() * curIndex);
    curIndex -= 1;

    tempValue = imgNames[curIndex];
    imgNames[curIndex] = imgNames[randIndex];
    imgNames[randIndex] = tempValue;
  }

  return array;
}

export default App;
