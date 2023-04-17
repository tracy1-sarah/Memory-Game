import React, { useState,useEffect} from 'react'
import './Home.scss'
import PlayGame from '../Components/PlayGame/PlayGame';
import Players from '../Components/Players/Players';
import Header from '../Components/Header/Header';
import Selection from '../Components/Selection/Selection';
import Results from '../Components/Modals/Results';
import SinglePlayer from '../Components/Players/SinglePlayer';


import {
  FaAppleAlt,
  FaStickerMule,
  FaQq,
  FaLinux,
  FaGrunt,
  FaGitkraken,
  FaEnvira,
  FaTripadvisor,
  FaThemeisle,
  FaTheRedYeti,
  FaBicycle,
  FaBasketballBall,
  FaYarn,
  FaViadeo,
  FaStudiovinari,
  FaMailchimp,
  FaDeskpro,
  FaAngellist
} from "react-icons/fa";

const Home = () => {
  const [deck, setDeck] = useState([]);
  const [players, setPlayers] = useState([]);
  const [firstNum, setfirstNum] = useState([-1, -1]); // checks too see if what's clicked is the 2nd
  const [currentPlayerId, setCurrentPlayerId] = useState(1);
  const [optionsSelected, setOptionsSelected] = useState(false);
  const [options, setOptions] = useState({});
  const [matchCount, setMatchCount] = useState(0);
  const [singlePlayerTime, setSinglePlayerTime] = useState("");
  const [stopTime,setStopTime] = useState(false);
  const [singlePlayerMoves, setSinglePlayerMoves] = useState(0);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [SubSelections, setSubSelections] = useState([
    {
      id: 1,
      header: "Select Theme",
      buttons: [
        {
          width: "220",
          height: "40",
          text: "Numbers",
          css: "light "
        },
        {
          width: "220",
          height: "40",
          text: "Icons",
          css: "light "
        },
      ]
    },
    {
      id: 2,
      header: "Number Of Players",
      buttons: [
        {
          width: "110",
          height: "40",
          text: "1",
          css: "light "
        },
        {
          width: "110",
          height: "40",
          text: "2",
          css: "light "
        },
        {
          width: "110",
          height: "40",
          text: "3",
          css: "light "
        },
        {
          width: "110",
          height: "40",
          text: "4",
          css: "light "
        }
      ]
    },
    {
      id: 3,
      header: "Grid Size",
      buttons: [
        {
          width: "220",
          height: "40",
          text: "4x4",
          css: "light "
        },
        {
          width: "220",
          height: "40",
          text: "6x6",
          css: "light "
        }
      ]
    }
  ]);

  let cardsArray = [

    {
      isImage: false,
      number: 1,
      image: <FaStickerMule />,
    }
    ,
    {
      isImage: false,
      number: 2,
      image: <FaQq />
    }
    ,
    {
      isImage: false,
      number: 3,
      image: <FaLinux />
    }
    ,
    {
      isImage: false,
      number: 4,
      image: <FaGrunt />
    }
    ,
    {
      isImage: false,
      number: 5,
      image: <FaGitkraken />
    },
    {
      isImage: false,
      number: 6,
      image: <FaEnvira />
    },
    {
      isImage: false,
      number: 7,
      image: <FaTripadvisor />
    },
    {
      isImage: false,
      number: 8,
      image: <FaThemeisle />
    },
    {
      isImage: false,
      number: 9,
      image: <FaTheRedYeti />
    },
    {
      isImage: false,
      number: 10,
      image: <FaAppleAlt />
    },
    {
      isImage: false,
      number: 11,
      image: <FaBicycle />
    },
    {
      isImage: false,
      number: 12,
      image: <FaBasketballBall />
    },
    {
      isImage: false,
      number: 13,
      image: <FaYarn />
    },
    {
      isImage: false,
      number: 14,
      image: <FaViadeo />
    },
    {
      isImage: false,
      number: 15,
      image: <FaStudiovinari />
    },
    {
      isImage: false,
      number: 16,
      image: <FaMailchimp />
    },
    {
      isImage: false,
      number: 17,
      image: <FaDeskpro />
    },
    {
      isImage: false,
      number: 18,
      image: <FaAngellist />
    },

  ];

  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;


  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((secondsElapsed) => secondsElapsed + 1);
      if (!stopTime){
        setSinglePlayerTime(`${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
        }
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsElapsed]);

  const shuffle = (deckSize, theme, numOfPlayers) => {

    let holder = [];
    let indexes = [];
    let tempPlayers = [];
    let cardsSubArray = cardsArray.slice(0, (deckSize / 2));

    if (theme === 'Icons') {
      cardsSubArray = cardsSubArray.map(el => {
        return {
          isImage: true,
          number: el.number,
          image: el.image
        }
      });
    } else {
      cardsSubArray = cardsSubArray.map(el => {
        return {
          isImage: false,
          number: el.number,
          image: el.image
        }
      });
    }

    for (let i = 1; i <= numOfPlayers; i++) {

      let firstIndex = (i === 1);

      tempPlayers.push({
        id: i,
        text: "Player " + i,
        score: 0,
        active: firstIndex
      });
    }

    setCurrentPlayerId(1);

    while (holder.length < deckSize) {
      let random = Math.floor(Math.random() * cardsSubArray.length);

      let test = indexes.filter(index => index === random).length < 2;

      if (test) {
        holder.push({ ...cardsSubArray[random], id: (holder.length + 1), css: "" });
        indexes.push(random);
        //randomly assigns value to deck if it doesn't exist twice
      }

    }

    setDeck(holder);
    setPlayers(tempPlayers);

  }

  const newGame = () => {
    setOptions({});
    setSubSelections(
      [
        {
          id: 1,
          header: "Select Theme",
          buttons: [
            {
              width: "220",
              height: "40",
              text: "Numbers",
              css: "light "
            },
            {
              width: "220",
              height: "40",
              text: "Icons",
              css: "light "
            },
          ]
        },
        {
          id: 2,
          header: "Number Of Players",
          buttons: [
            {
              width: "110",
              height: "40",
              text: "1",
              css: "light "
            },
            {
              width: "110",
              height: "40",
              text: "2",
              css: "light "
            },
            {
              width: "110",
              height: "40",
              text: "3",
              css: "light "
            },
            {
              width: "110",
              height: "40",
              text: "4",
              css: "light "
            }
          ]
        },
        {
          id: 3,
          header: "Grid Size",
          buttons: [
            {
              width: "220",
              height: "40",
              text: "4x4",
              css: "light "
            },
            {
              width: "220",
              height: "40",
              text: "6x6",
              css: "light "
            }
          ]
        }
      ]
    )
    setOptionsSelected(false);
  }

  const closeUnmatchedCards = () => {

    setDeck(deck.map(
      (element) => {
        if (element.css.includes("unMatch") || element.css.includes("show")) {
          return {
            id: element.id,
            isImage: element.isImage,
            number: element.number,
            image: element.image,
            css: ""
          };
        } else {
          return element;
        }
      }
    )
    )

    let currentPlayer = (currentPlayerId + 1) % (players.length) === 0 ? players.length : (currentPlayerId + 1) % (players.length);


    setCurrentPlayerId(currentPlayer);

    setPlayers(players.map(player => {
      if (player.id === currentPlayer) {
        return {
          id: player.id,
          text: player.text,
          score: player.score,
          active: true
        }
      } else {
        return {
          id: player.id,
          text: player.text,
          score: player.score,
          active: false
        }
      }
    })
    )
  }

  const cardClickHandler = (id, number, isMatched) => {

    if (isMatched || id === firstNum[0]) { return }

    if (firstNum[0] === -1) {
      setfirstNum([id, number]);
      setDeck(
        deck.map((element) => {
          if (id === element.id) {
            return {
              id: id,
              isImage: element.isImage,
              number: element.number,
              image: element.image,
              css: "open show"
            };
          } else {
            return element;
          }
        })
      );
    } else {
      if(options.players === 1){
      setSinglePlayerMoves(singlePlayerMoves +1 );
      }
      if (firstNum[0] !== id && firstNum[1] === number) {

        setDeck(
          deck.map((element) => {
            if (number === element.number) {
              return {
                id: element.id,
                isImage: element.isImage,
                number: element.number,
                image: element.image,
                isMatched: true,
                css: "match"
              };
            } else {
              return element;
            }
          })
        );

        setPlayers(players.map(player => {
          if (player.id === currentPlayerId) {
            return {
              id: player.id,
              text: player.text,
              score: player.score + 1,
              active: true
            }
          } else {
            return {
              id: player.id,
              text: player.text,
              score: player.score,
              active: false
            }
          }
        })
        )

        setMatchCount(matchCount + 1);

        setfirstNum([-1, -1]);

        if(matchCount === (options.size / 2)-1){//Value isn't updated at the time of check, hence the need for the -1
          setStopTime(true);
        }

      } else {

        setDeck(
          deck.map((element) => {
            if (element.id === id || element.id === firstNum[0]) {
              return {
                id: element.id,
                isImage: element.isImage,
                number: element.number,
                image: element.image,
                css: "unMatch"
              };
            } else {
              if (!element.isMatched) {
                return {
                  id: element.id,
                  isImage: element.isImage,
                  number: element.number,
                  image: element.image,
                  css: ""
                };
              } else {
                return element;
              }
            }
          })
        );
        setTimeout(function () {
          closeUnmatchedCards()
        }, 750);
        setfirstNum([-1, -1]);
      }

    }

  }

  const headerClickHandler = (text) => {
    setMatchCount(0);
    setStopTime(false);
    setSinglePlayerMoves(0);
    setSecondsElapsed(0);
    text === "Restart" ? shuffle(options.size, options.theme, options.players) : newGame();
  }

  const selectionHandler = (id, subarrayId, str) => {

    if (id === 1) {
      setOptions({
        ...options,
        theme: str
      });

      let arr = SubSelections[0].buttons;

      for (let i = 0; i < arr.length; i++) {
        arr[i].css = "light";
      }

      arr[subarrayId].css = "selected";

      setSubSelections(
        SubSelections.map(selection => {
          if (selection.id === 1) {
            return {
              id: 1,
              header: "Select Theme",
              buttons: arr
            }
          } else {
            return selection;
          }
        })
      )

    } else if (id === 2) {
      setOptions({
        ...options,
        players: parseInt(str)
      })

      let arr = SubSelections[1].buttons;

      for (let i = 0; i < arr.length; i++) {
        arr[i].css = "light";
      }

      arr[subarrayId].css = "selected";

      setSubSelections(
        SubSelections.map(selection => {
          if (selection.id === 2) {
            return {
              id: 2,
              header: "Number Of Players",
              buttons: arr
            }
          } else {
            return selection;
          }
        })
      )

    } else {
      let size = str === "4x4" ? 16 : 36;
      setOptions({
        ...options,
        size: parseInt(size)
      })

      let arr = SubSelections[2].buttons;

      for (let i = 0; i < arr.length; i++) {
        arr[i].css = "light";
      }

      arr[subarrayId].css = "selected";

      setSubSelections(
        SubSelections.map(selection => {
          if (selection.id === 3) {
            return {
              id: 3,
              header: "Grid Size",
              buttons: arr
            }
          } else {
            return selection;
          }
        })
      )

    }
  }

  const startGame = (e) => {
    setMatchCount(0);
    setStopTime(false);
    setSinglePlayerMoves(0);
    setSecondsElapsed(0);
    if (options.theme && options.players && options.size) {
      shuffle(options.size, options.theme, options.players);
      setOptionsSelected(true);
    } else {
      alert("please make all selections");
    }
  }

  const messageHandler = () => {
    let temp = [...players].sort((a, b) => b.score - a.score);
    if(temp.length>1){
    return temp[0].score === temp[1].score ? "Its a tie!" : `Congratulations ${temp[0].text}, you won!`;
  }

    return "Great Work! You Completed the Game."

  }

  const singlePlayerResults = () =>{
    let finishTime = singlePlayerTime;
    return {time:finishTime,moves:singlePlayerMoves};
  }

  return (
    <div id='home-main' className={optionsSelected ? "play" : "select"}>
      {
        optionsSelected ?
          <div className='page'>
            <Header headerClickHandler={headerClickHandler} size={options.size === 16 ? "small" : "large"} />
            <PlayGame Deck={deck} cardClickHandler={cardClickHandler} size={options.size === 16 ? "small" : "large"} />
            {options.players === 1 ? <SinglePlayer _time={singlePlayerTime} moves={singlePlayerMoves} size={options.size === 16 ? "small" : "large"} /> : <Players Players={players} size={options.size === 16 ? "small" : "large"} />}
          </div>
          : <Selection SubSelections={SubSelections} selectionHandler={selectionHandler} startGame={startGame} />
      }
      {matchCount === (options.size / 2) && <Results players={players} singlePlayer={singlePlayerResults()} message={messageHandler()} buttonClickHandler={headerClickHandler} />}
    </div>
  )
}

export default Home