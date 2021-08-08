import React, {useState} from 'react';
import './App.css';



function App() {

  let [game, changeGame] = useState(
    [
    [2,4,2,4],
    [0,4,4,2],
    [0,8,0,2],
    [2,8,4,2]]
    );

    let [color, changeColor] = useState(
      [
      ["white","white","white","white"],
      ["white","white","white","white"],
      ["white","white","white","white"],
      ["white","white","white","white"]]
    );

  function up() {
    let updatedGame = [...game];

    //first column start
    let firstColumn = [];
    if(updatedGame[0][0]) firstColumn.push(updatedGame[0][0]);
    if(updatedGame[1][0]) firstColumn.push(updatedGame[1][0]);
    if(updatedGame[2][0]) firstColumn.push(updatedGame[2][0]);
    if(updatedGame[3][0]) firstColumn.push(updatedGame[3][0]);

    //when the number of elements of first column which is not 0 is four
    if(firstColumn.length === 4) {
      const sameOrDiffArr = [
        firstColumn[0]===firstColumn[1],
        firstColumn[1]===firstColumn[2],
        firstColumn[2]===firstColumn[3]]

      if(sameOrDiffArr[0]) {
        firstColumn.splice(0, 2, firstColumn[0]+firstColumn[1]);
        if(sameOrDiffArr[2]) {
          firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        firstColumn.splice(2, 2, firstColumn[2]+firstColumn[3]);
      }
    }

    //when the number of elements of first column which is not 0 is three
    else if(firstColumn.length === 3) {
      const sameOrDiffArr = [
        firstColumn[0]===firstColumn[1],
        firstColumn[1]===firstColumn[2]]

      if(sameOrDiffArr[0]) {
        firstColumn.splice(0, 2, firstColumn[0]+firstColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2])
      }
  }

    //when the number of elements of first column which is not 0 is two
    else if(firstColumn.length === 2) {
      if(firstColumn[0] === firstColumn[1]) {
        firstColumn = [firstColumn[0]+firstColumn[1]];
      }
    }

    if (firstColumn.length === 3) firstColumn.push(0);
    if (firstColumn.length === 2) firstColumn.push(0, 0);
    if (firstColumn.length === 1) firstColumn.push(0, 0, 0);
    if (firstColumn.length === 0) firstColumn.push(0, 0, 0, 0);

    [updatedGame[0][0], updatedGame[1][0], updatedGame[2][0], updatedGame[3][0]] = firstColumn;
    //first column end
    //second column start
    let secondColumn = [];
    if(updatedGame[0][1]) secondColumn.push(updatedGame[0][1]);
    if(updatedGame[1][1]) secondColumn.push(updatedGame[1][1]);
    if(updatedGame[2][1]) secondColumn.push(updatedGame[2][1]);
    if(updatedGame[3][1]) secondColumn.push(updatedGame[3][1]);

    //when the number of elements of second column which is not 0 is four
    if(secondColumn.length === 4) {
      const sameOrDiffArr = [
        secondColumn[0]===secondColumn[1],
        secondColumn[1]===secondColumn[2],
        secondColumn[2]===secondColumn[3]]

      if(sameOrDiffArr[0]) {
        secondColumn.splice(0, 2, secondColumn[0]+secondColumn[1]);
        if(sameOrDiffArr[2]) {
          secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        secondColumn.splice(2, 2, secondColumn[2]+secondColumn[3]);
      }
    }

    //when the number of elements of second column which is not 0 is three
    else if(secondColumn.length === 3) {
      const sameOrDiffArr = [
        secondColumn[0]===secondColumn[1],
        secondColumn[1]===secondColumn[2]]

      if(sameOrDiffArr[0]) {
        secondColumn.splice(0, 2, secondColumn[0]+secondColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2])
      }
  }

    //when the number of elements of second column which is not 0 is two
    else if(secondColumn.length === 2) {
      if(secondColumn[0] === secondColumn[1]) {
        secondColumn = [secondColumn[0]+secondColumn[1]];
      }
    }

    if (secondColumn.length === 3) secondColumn.push(0);
    if (secondColumn.length === 2) secondColumn.push(0, 0);
    if (secondColumn.length === 1) secondColumn.push(0, 0, 0);
    if (secondColumn.length === 0) secondColumn.push(0, 0, 0, 0);

    [updatedGame[0][1], updatedGame[1][1], updatedGame[2][1], updatedGame[3][1]] = secondColumn;
    //second column end
    //third column start
    let thirdColumn = [];
    if(updatedGame[0][2]) thirdColumn.push(updatedGame[0][2]);
    if(updatedGame[1][2]) thirdColumn.push(updatedGame[1][2]);
    if(updatedGame[2][2]) thirdColumn.push(updatedGame[2][2]);
    if(updatedGame[3][2]) thirdColumn.push(updatedGame[3][2]);

    //when the number of elements of third column which is not 0 is four
    if(thirdColumn.length === 4) {
      const sameOrDiffArr = [
        thirdColumn[0]===thirdColumn[1],
        thirdColumn[1]===thirdColumn[2],
        thirdColumn[2]===thirdColumn[3]]

      if(sameOrDiffArr[0]) {
        thirdColumn.splice(0, 2, thirdColumn[0]+thirdColumn[1]);
        if(sameOrDiffArr[2]) {
          thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        thirdColumn.splice(2, 2, thirdColumn[2]+thirdColumn[3]);
      }
    }

    //when the number of elements of third column which is not 0 is three
    else if(thirdColumn.length === 3) {
      const sameOrDiffArr = [
        thirdColumn[0]===thirdColumn[1],
        thirdColumn[1]===thirdColumn[2]]

      if(sameOrDiffArr[0]) {
        thirdColumn.splice(0, 2, thirdColumn[0]+thirdColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2])
      }
  }

    //when the number of elements of third column which is not 0 is two
    else if(thirdColumn.length === 2) {
      if(thirdColumn[0] === thirdColumn[1]) {
        thirdColumn = [thirdColumn[0]+thirdColumn[1]];
      }
    }

    if (thirdColumn.length === 3) thirdColumn.push(0);
    if (thirdColumn.length === 2) thirdColumn.push(0, 0);
    if (thirdColumn.length === 1) thirdColumn.push(0, 0, 0);
    if (thirdColumn.length === 0) thirdColumn.push(0, 0, 0, 0);

    [updatedGame[0][2], updatedGame[1][2], updatedGame[2][2], updatedGame[3][2]] = thirdColumn;
    //third column end
    //fourth column start
    let fourthColumn = [];
    if(updatedGame[0][3]) fourthColumn.push(updatedGame[0][3]);
    if(updatedGame[1][3]) fourthColumn.push(updatedGame[1][3]);
    if(updatedGame[2][3]) fourthColumn.push(updatedGame[2][3]);
    if(updatedGame[3][3]) fourthColumn.push(updatedGame[3][3]);

    //when the number of elements of fourth column which is not 0 is four
    if(fourthColumn.length === 4) {
      const sameOrDiffArr = [
        fourthColumn[0]===fourthColumn[1],
        fourthColumn[1]===fourthColumn[2],
        fourthColumn[2]===fourthColumn[3]]

      if(sameOrDiffArr[0]) {
        fourthColumn.splice(0, 2, fourthColumn[0]+fourthColumn[1]);
        if(sameOrDiffArr[2]) {
          fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        fourthColumn.splice(2, 2, fourthColumn[2]+fourthColumn[3]);
      }
    }

    //when the number of elements of fourth column which is not 0 is three
    else if(fourthColumn.length === 3) {
      const sameOrDiffArr = [
        fourthColumn[0]===fourthColumn[1],
        fourthColumn[1]===fourthColumn[2]]

      if(sameOrDiffArr[0]) {
        fourthColumn.splice(0, 2, fourthColumn[0]+fourthColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2])
      }
  }

    //when the number of elements of fourth column which is not 0 is two
    else if(fourthColumn.length === 2) {
      if(fourthColumn[0] === fourthColumn[1]) {
        fourthColumn = [fourthColumn[0]+fourthColumn[1]];
      }
    }

    if (fourthColumn.length === 3) fourthColumn.push(0);
    if (fourthColumn.length === 2) fourthColumn.push(0, 0);
    if (fourthColumn.length === 1) fourthColumn.push(0, 0, 0);
    if (fourthColumn.length === 0) fourthColumn.push(0, 0, 0, 0);

    [updatedGame[0][3], updatedGame[1][3], updatedGame[2][3], updatedGame[3][3]] = fourthColumn;
    //fourth column end
    changeGame(updatedGame);
    updateColor();
  }

  function left() {
    let updatedGame = [...game];

    //first row start
    let firstRow = [];
    if(updatedGame[0][0]) firstRow.push(updatedGame[0][0]);
    if(updatedGame[0][1]) firstRow.push(updatedGame[0][1]);
    if(updatedGame[0][2]) firstRow.push(updatedGame[0][2]);
    if(updatedGame[0][3]) firstRow.push(updatedGame[0][3]);

    //when the number of elements of first row which is not 0 is four
    if(firstRow.length === 4) {
      const sameOrDiffArr = [
        firstRow[0]===firstRow[1],
        firstRow[1]===firstRow[2],
        firstRow[2]===firstRow[3]]

      if(sameOrDiffArr[0]) {
        firstRow.splice(0, 2, firstRow[0]+firstRow[1]);
        if(sameOrDiffArr[2]) {
          firstRow.splice(1, 2, firstRow[1]+firstRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        firstRow.splice(1, 2, firstRow[1]+firstRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        firstRow.splice(2, 2, firstRow[2]+firstRow[3]);
      }
    }

    //when the number of elements of first row which is not 0 is three
    else if(firstRow.length === 3) {
      const sameOrDiffArr = [
        firstRow[0]===firstRow[1],
        firstRow[1]===firstRow[2]]

      if(sameOrDiffArr[0]) {
        firstRow.splice(0, 2, firstRow[0]+firstRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        firstRow.splice(1, 2, firstRow[1]+firstRow[2])
      }
  }

    //when the number of elements of first row which is not 0 is two
    else if(firstRow.length === 2) {
      if(firstRow[0] === firstRow[1]) {
        firstRow = [firstRow[0]+firstRow[1]];
      }
    }

    if (firstRow.length === 3) firstRow.push(0);
    if (firstRow.length === 2) firstRow.push(0, 0);
    if (firstRow.length === 1) firstRow.push(0, 0, 0);
    if (firstRow.length === 0) firstRow.push(0, 0, 0, 0);

    [updatedGame[0][0], updatedGame[0][1], updatedGame[0][2], updatedGame[0][3]] = firstRow;
    //first row end
    //second row start
    let secondRow = [];
    if(updatedGame[1][0]) secondRow.push(updatedGame[1][0]);
    if(updatedGame[1][1]) secondRow.push(updatedGame[1][1]);
    if(updatedGame[1][2]) secondRow.push(updatedGame[1][2]);
    if(updatedGame[1][3]) secondRow.push(updatedGame[1][3]);

    //when the number of elements of second row which is not 0 is four
    if(secondRow.length === 4) {
      const sameOrDiffArr = [
        secondRow[0]===secondRow[1],
        secondRow[1]===secondRow[2],
        secondRow[2]===secondRow[3]]

      if(sameOrDiffArr[0]) {
        secondRow.splice(0, 2, secondRow[0]+secondRow[1]);
        if(sameOrDiffArr[2]) {
          secondRow.splice(1, 2, secondRow[1]+secondRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        secondRow.splice(1, 2, secondRow[1]+secondRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        secondRow.splice(2, 2, secondRow[2]+secondRow[3]);
      }
    }

    //when the number of elements of second row which is not 0 is three
    else if(secondRow.length === 3) {
      const sameOrDiffArr = [
        secondRow[0]===secondRow[1],
        secondRow[1]===secondRow[2]]

      if(sameOrDiffArr[0]) {
        secondRow.splice(0, 2, secondRow[0]+secondRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        secondRow.splice(1, 2, secondRow[1]+secondRow[2])
      }
  }

    //when the number of elements of second row which is not 0 is two
    else if(secondRow.length === 2) {
      if(secondRow[0] === secondRow[1]) {
        secondRow = [secondRow[0]+secondRow[1]];
      }
    }

    if (secondRow.length === 3) secondRow.push(0);
    if (secondRow.length === 2) secondRow.push(0, 0);
    if (secondRow.length === 1) secondRow.push(0, 0, 0);
    if (secondRow.length === 0) secondRow.push(0, 0, 0, 0);

    [updatedGame[1][0], updatedGame[1][1], updatedGame[1][2], updatedGame[1][3]] = secondRow;
    //second Row end
    //third Row start
    let thirdRow = [];
    if(updatedGame[2][0]) thirdRow.push(updatedGame[2][0]);
    if(updatedGame[2][1]) thirdRow.push(updatedGame[2][1]);
    if(updatedGame[2][2]) thirdRow.push(updatedGame[2][2]);
    if(updatedGame[2][3]) thirdRow.push(updatedGame[2][3]);

    //when the number of elements of third row which is not 0 is four
    if(thirdRow.length === 4) {
      const sameOrDiffArr = [
        thirdRow[0]===thirdRow[1],
        thirdRow[1]===thirdRow[2],
        thirdRow[2]===thirdRow[3]]

      if(sameOrDiffArr[0]) {
        thirdRow.splice(0, 2, thirdRow[0]+thirdRow[1]);
        if(sameOrDiffArr[2]) {
          thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        thirdRow.splice(2, 2, thirdRow[2]+thirdRow[3]);
      }
    }

    //when the number of elements of third row which is not 0 is three
    else if(thirdRow.length === 3) {
      const sameOrDiffArr = [
        thirdRow[0]===thirdRow[1],
        thirdRow[1]===thirdRow[2]]

      if(sameOrDiffArr[0]) {
        thirdRow.splice(0, 2, thirdRow[0]+thirdRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2])
      }
  }

    //when the number of elements of third row which is not 0 is two
    else if(thirdRow.length === 2) {
      if(thirdRow[0] === thirdRow[1]) {
        thirdRow = [thirdRow[0]+thirdRow[1]];
      }
    }

    if (thirdRow.length === 3) thirdRow.push(0);
    if (thirdRow.length === 2) thirdRow.push(0, 0);
    if (thirdRow.length === 1) thirdRow.push(0, 0, 0);
    if (thirdRow.length === 0) thirdRow.push(0, 0, 0, 0);

    [updatedGame[2][0], updatedGame[2][1], updatedGame[2][2], updatedGame[2][3]] = thirdRow;
    //third row end
    //fourth row start
    let fourthRow = [];
    if(updatedGame[3][0]) fourthRow.push(updatedGame[3][0]);
    if(updatedGame[3][1]) fourthRow.push(updatedGame[3][1]);
    if(updatedGame[3][2]) fourthRow.push(updatedGame[3][2]);
    if(updatedGame[3][3]) fourthRow.push(updatedGame[3][3]);

    //when the number of elements of fourth row which is not 0 is four
    if(fourthRow.length === 4) {
      const sameOrDiffArr = [
        fourthRow[0]===fourthRow[1],
        fourthRow[1]===fourthRow[2],
        fourthRow[2]===fourthRow[3]]

      if(sameOrDiffArr[0]) {
        fourthRow.splice(0, 2, fourthRow[0]+fourthRow[1]);
        if(sameOrDiffArr[2]) {
          fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        fourthRow.splice(2, 2, fourthRow[2]+fourthRow[3]);
      }
    }

    //when the number of elements of fourth row which is not 0 is three
    else if(fourthRow.length === 3) {
      const sameOrDiffArr = [
        fourthRow[0]===fourthRow[1],
        fourthRow[1]===fourthRow[2]]

      if(sameOrDiffArr[0]) {
        fourthRow.splice(0, 2, fourthRow[0]+fourthRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2])
      }
  }

    //when the number of elements of fourth row which is not 0 is two
    else if(fourthRow.length === 2) {
      if(fourthRow[0] === fourthRow[1]) {
        fourthRow = [fourthRow[0]+fourthRow[1]];
      }
    }

    if (fourthRow.length === 3) fourthRow.push(0);
    if (fourthRow.length === 2) fourthRow.push(0, 0);
    if (fourthRow.length === 1) fourthRow.push(0, 0, 0);
    if (fourthRow.length === 0) fourthRow.push(0, 0, 0, 0);

    [updatedGame[3][0], updatedGame[3][1], updatedGame[3][2], updatedGame[3][3]] = fourthRow;
    //fourth row end
    changeGame(updatedGame);
    updateColor();
  }

  function right() {
    let updatedGame = [...game];

    //first row start
    let firstRow = [];
    if(updatedGame[0][3]) firstRow.push(updatedGame[0][3]);
    if(updatedGame[0][2]) firstRow.push(updatedGame[0][2]);
    if(updatedGame[0][1]) firstRow.push(updatedGame[0][1]);
    if(updatedGame[0][0]) firstRow.push(updatedGame[0][0]);

    //when the number of elements of first row which is not 0 is four
    if(firstRow.length === 4) {
      const sameOrDiffArr = [
        firstRow[0]===firstRow[1],
        firstRow[1]===firstRow[2],
        firstRow[2]===firstRow[3]]

      if(sameOrDiffArr[0]) {
        firstRow.splice(0, 2, firstRow[0]+firstRow[1]);
        if(sameOrDiffArr[2]) {
          firstRow.splice(1, 2, firstRow[1]+firstRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        firstRow.splice(1, 2, firstRow[1]+firstRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        firstRow.splice(2, 2, firstRow[2]+firstRow[3]);
      }
    }

    //when the number of elements of first row which is not 0 is three
    else if(firstRow.length === 3) {
      const sameOrDiffArr = [
        firstRow[0]===firstRow[1],
        firstRow[1]===firstRow[2]]

      if(sameOrDiffArr[0]) {
        firstRow.splice(0, 2, firstRow[0]+firstRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        firstRow.splice(1, 2, firstRow[1]+firstRow[2])
      }
  }

    //when the number of elements of first row which is not 0 is two
    else if(firstRow.length === 2) {
      if(firstRow[0] === firstRow[1]) {
        firstRow = [firstRow[0]+firstRow[1]];
      }
    }

    if (firstRow.length === 3) firstRow.push(0);
    if (firstRow.length === 2) firstRow.push(0, 0);
    if (firstRow.length === 1) firstRow.push(0, 0, 0);
    if (firstRow.length === 0) firstRow.push(0, 0, 0, 0);

    [updatedGame[0][3], updatedGame[0][2], updatedGame[0][1], updatedGame[0][0]] = firstRow;
    //first row end
    //second row start
    let secondRow = [];
    if(updatedGame[1][3]) secondRow.push(updatedGame[1][3]);
    if(updatedGame[1][2]) secondRow.push(updatedGame[1][2]);
    if(updatedGame[1][1]) secondRow.push(updatedGame[1][1]);
    if(updatedGame[1][0]) secondRow.push(updatedGame[1][0]);

    //when the number of elements of second row which is not 0 is four
    if(secondRow.length === 4) {
      const sameOrDiffArr = [
        secondRow[0]===secondRow[1],
        secondRow[1]===secondRow[2],
        secondRow[2]===secondRow[3]]

      if(sameOrDiffArr[0]) {
        secondRow.splice(0, 2, secondRow[0]+secondRow[1]);
        if(sameOrDiffArr[2]) {
          secondRow.splice(1, 2, secondRow[1]+secondRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        secondRow.splice(1, 2, secondRow[1]+secondRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        secondRow.splice(2, 2, secondRow[2]+secondRow[3]);
      }
    }

    //when the number of elements of second row which is not 0 is three
    else if(secondRow.length === 3) {
      const sameOrDiffArr = [
        secondRow[0]===secondRow[1],
        secondRow[1]===secondRow[2]]

      if(sameOrDiffArr[0]) {
        secondRow.splice(0, 2, secondRow[0]+secondRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        secondRow.splice(1, 2, secondRow[1]+secondRow[2])
      }
  }

    //when the number of elements of second row which is not 0 is two
    else if(secondRow.length === 2) {
      if(secondRow[0] === secondRow[1]) {
        secondRow = [secondRow[0]+secondRow[1]];
      }
    }

    if (secondRow.length === 3) secondRow.push(0);
    if (secondRow.length === 2) secondRow.push(0, 0);
    if (secondRow.length === 1) secondRow.push(0, 0, 0);
    if (secondRow.length === 0) secondRow.push(0, 0, 0, 0);

    [updatedGame[1][3], updatedGame[1][2], updatedGame[1][1], updatedGame[1][0]] = secondRow;
    //second Row end
    //third Row start
    let thirdRow = [];
    if(updatedGame[2][3]) thirdRow.push(updatedGame[2][3]);
    if(updatedGame[2][2]) thirdRow.push(updatedGame[2][2]);
    if(updatedGame[2][1]) thirdRow.push(updatedGame[2][1]);
    if(updatedGame[2][0]) thirdRow.push(updatedGame[2][0]);

    //when the number of elements of third row which is not 0 is four
    if(thirdRow.length === 4) {
      const sameOrDiffArr = [
        thirdRow[0]===thirdRow[1],
        thirdRow[1]===thirdRow[2],
        thirdRow[2]===thirdRow[3]]

      if(sameOrDiffArr[0]) {
        thirdRow.splice(0, 2, thirdRow[0]+thirdRow[1]);
        if(sameOrDiffArr[2]) {
          thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        thirdRow.splice(2, 2, thirdRow[2]+thirdRow[3]);
      }
    }

    //when the number of elements of third row which is not 0 is three
    else if(thirdRow.length === 3) {
      const sameOrDiffArr = [
        thirdRow[0]===thirdRow[1],
        thirdRow[1]===thirdRow[2]]

      if(sameOrDiffArr[0]) {
        thirdRow.splice(0, 2, thirdRow[0]+thirdRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        thirdRow.splice(1, 2, thirdRow[1]+thirdRow[2])
      }
  }

    //when the number of elements of third row which is not 0 is two
    else if(thirdRow.length === 2) {
      if(thirdRow[0] === thirdRow[1]) {
        thirdRow = [thirdRow[0]+thirdRow[1]];
      }
    }

    if (thirdRow.length === 3) thirdRow.push(0);
    if (thirdRow.length === 2) thirdRow.push(0, 0);
    if (thirdRow.length === 1) thirdRow.push(0, 0, 0);
    if (thirdRow.length === 0) thirdRow.push(0, 0, 0, 0);

    [updatedGame[2][3], updatedGame[2][2], updatedGame[2][1], updatedGame[2][0]] = thirdRow;
    //third row end
    //fourth row start
    let fourthRow = [];
    if(updatedGame[3][3]) fourthRow.push(updatedGame[3][3]);
    if(updatedGame[3][2]) fourthRow.push(updatedGame[3][2]);
    if(updatedGame[3][1]) fourthRow.push(updatedGame[3][1]);
    if(updatedGame[3][0]) fourthRow.push(updatedGame[3][0]);

    //when the number of elements of fourth row which is not 0 is four
    if(fourthRow.length === 4) {
      const sameOrDiffArr = [
        fourthRow[0]===fourthRow[1],
        fourthRow[1]===fourthRow[2],
        fourthRow[2]===fourthRow[3]]

      if(sameOrDiffArr[0]) {
        fourthRow.splice(0, 2, fourthRow[0]+fourthRow[1]);
        if(sameOrDiffArr[2]) {
          fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2]);
      }

      else if (sameOrDiffArr[2]) {
        fourthRow.splice(2, 2, fourthRow[2]+fourthRow[3]);
      }
    }

    //when the number of elements of fourth row which is not 0 is three
    else if(fourthRow.length === 3) {
      const sameOrDiffArr = [
        fourthRow[0]===fourthRow[1],
        fourthRow[1]===fourthRow[2]]

      if(sameOrDiffArr[0]) {
        fourthRow.splice(0, 2, fourthRow[0]+fourthRow[1]);
      }

      else if(sameOrDiffArr[1]) {
        fourthRow.splice(1, 2, fourthRow[1]+fourthRow[2])
      }
  }

    //when the number of elements of fourth row which is not 0 is two
    else if(fourthRow.length === 2) {
      if(fourthRow[0] === fourthRow[1]) {
        fourthRow = [fourthRow[0]+fourthRow[1]];
      }
    }

    if (fourthRow.length === 3) fourthRow.push(0);
    if (fourthRow.length === 2) fourthRow.push(0, 0);
    if (fourthRow.length === 1) fourthRow.push(0, 0, 0);
    if (fourthRow.length === 0) fourthRow.push(0, 0, 0, 0);

    [updatedGame[3][3], updatedGame[3][2], updatedGame[3][1], updatedGame[3][0]] = fourthRow;
    //fourth row end
    changeGame(updatedGame);
    updateColor();
  }

  function down() {
    let updatedGame = [...game];

    //first column start
    let firstColumn = [];
    if(updatedGame[3][0]) firstColumn.push(updatedGame[3][0]);
    if(updatedGame[2][0]) firstColumn.push(updatedGame[2][0]);
    if(updatedGame[1][0]) firstColumn.push(updatedGame[1][0]);
    if(updatedGame[0][0]) firstColumn.push(updatedGame[0][0]);

    //when the number of elements of first column which is not 0 is four
    if(firstColumn.length === 4) {
      const sameOrDiffArr = [
        firstColumn[0]===firstColumn[1],
        firstColumn[1]===firstColumn[2],
        firstColumn[2]===firstColumn[3]]

      if(sameOrDiffArr[0]) {
        firstColumn.splice(0, 2, firstColumn[0]+firstColumn[1]);
        if(sameOrDiffArr[2]) {
          firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        firstColumn.splice(2, 2, firstColumn[2]+firstColumn[3]);
      }
    }

    //when the number of elements of first column which is not 0 is three
    else if(firstColumn.length === 3) {
      const sameOrDiffArr = [
        firstColumn[0]===firstColumn[1],
        firstColumn[1]===firstColumn[2]]

      if(sameOrDiffArr[0]) {
        firstColumn.splice(0, 2, firstColumn[0]+firstColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        firstColumn.splice(1, 2, firstColumn[1]+firstColumn[2])
      }
  }

    //when the number of elements of first column which is not 0 is two
    else if(firstColumn.length === 2) {
      if(firstColumn[0] === firstColumn[1]) {
        firstColumn = [firstColumn[0]+firstColumn[1]];
      }
    }

    if (firstColumn.length === 3) firstColumn.push(0);
    if (firstColumn.length === 2) firstColumn.push(0, 0);
    if (firstColumn.length === 1) firstColumn.push(0, 0, 0);
    if (firstColumn.length === 0) firstColumn.push(0, 0, 0, 0);

    [updatedGame[3][0], updatedGame[2][0], updatedGame[1][0], updatedGame[0][0]] = firstColumn;
    //first column end
    //second column start
    let secondColumn = [];
    if(updatedGame[3][1]) secondColumn.push(updatedGame[3][1]);
    if(updatedGame[2][1]) secondColumn.push(updatedGame[2][1]);
    if(updatedGame[1][1]) secondColumn.push(updatedGame[1][1]);
    if(updatedGame[0][1]) secondColumn.push(updatedGame[0][1]);

    //when the number of elements of second column which is not 0 is four
    if(secondColumn.length === 4) {
      const sameOrDiffArr = [
        secondColumn[0]===secondColumn[1],
        secondColumn[1]===secondColumn[2],
        secondColumn[2]===secondColumn[3]]

      if(sameOrDiffArr[0]) {
        secondColumn.splice(0, 2, secondColumn[0]+secondColumn[1]);
        if(sameOrDiffArr[2]) {
          secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        secondColumn.splice(2, 2, secondColumn[2]+secondColumn[3]);
      }
    }

    //when the number of elements of second column which is not 0 is three
    else if(secondColumn.length === 3) {
      const sameOrDiffArr = [
        secondColumn[0]===secondColumn[1],
        secondColumn[1]===secondColumn[2]]

      if(sameOrDiffArr[0]) {
        secondColumn.splice(0, 2, secondColumn[0]+secondColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        secondColumn.splice(1, 2, secondColumn[1]+secondColumn[2])
      }
  }

    //when the number of elements of second column which is not 0 is two
    else if(secondColumn.length === 2) {
      if(secondColumn[0] === secondColumn[1]) {
        secondColumn = [secondColumn[0]+secondColumn[1]];
      }
    }

    if (secondColumn.length === 3) secondColumn.push(0);
    if (secondColumn.length === 2) secondColumn.push(0, 0);
    if (secondColumn.length === 1) secondColumn.push(0, 0, 0);
    if (secondColumn.length === 0) secondColumn.push(0, 0, 0, 0);

    [updatedGame[3][1], updatedGame[2][1], updatedGame[1][1], updatedGame[0][1]] = secondColumn;
    //second column end
    //third column start
    let thirdColumn = [];
    if(updatedGame[3][2]) thirdColumn.push(updatedGame[3][2]);
    if(updatedGame[2][2]) thirdColumn.push(updatedGame[2][2]);
    if(updatedGame[1][2]) thirdColumn.push(updatedGame[1][2]);
    if(updatedGame[0][2]) thirdColumn.push(updatedGame[0][2]);

    //when the number of elements of third column which is not 0 is four
    if(thirdColumn.length === 4) {
      const sameOrDiffArr = [
        thirdColumn[0]===thirdColumn[1],
        thirdColumn[1]===thirdColumn[2],
        thirdColumn[2]===thirdColumn[3]]

      if(sameOrDiffArr[0]) {
        thirdColumn.splice(0, 2, thirdColumn[0]+thirdColumn[1]);
        if(sameOrDiffArr[2]) {
          thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        thirdColumn.splice(2, 2, thirdColumn[2]+thirdColumn[3]);
      }
    }

    //when the number of elements of third column which is not 0 is three
    else if(thirdColumn.length === 3) {
      const sameOrDiffArr = [
        thirdColumn[0]===thirdColumn[1],
        thirdColumn[1]===thirdColumn[2]]

      if(sameOrDiffArr[0]) {
        thirdColumn.splice(0, 2, thirdColumn[0]+thirdColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        thirdColumn.splice(1, 2, thirdColumn[1]+thirdColumn[2])
      }
  }

    //when the number of elements of third column which is not 0 is two
    else if(thirdColumn.length === 2) {
      if(thirdColumn[0] === thirdColumn[1]) {
        thirdColumn = [thirdColumn[0]+thirdColumn[1]];
      }
    }

    if (thirdColumn.length === 3) thirdColumn.push(0);
    if (thirdColumn.length === 2) thirdColumn.push(0, 0);
    if (thirdColumn.length === 1) thirdColumn.push(0, 0, 0);
    if (thirdColumn.length === 0) thirdColumn.push(0, 0, 0, 0);

    [updatedGame[3][2], updatedGame[2][2], updatedGame[1][2], updatedGame[0][2]] = thirdColumn;
    //third column end
    //fourth column start
    let fourthColumn = [];
    if(updatedGame[3][3]) fourthColumn.push(updatedGame[3][3]);
    if(updatedGame[2][3]) fourthColumn.push(updatedGame[2][3]);
    if(updatedGame[1][3]) fourthColumn.push(updatedGame[1][3]);
    if(updatedGame[0][3]) fourthColumn.push(updatedGame[0][3]);

    //when the number of elements of fourth column which is not 0 is four
    if(fourthColumn.length === 4) {
      const sameOrDiffArr = [
        fourthColumn[0]===fourthColumn[1],
        fourthColumn[1]===fourthColumn[2],
        fourthColumn[2]===fourthColumn[3]]

      if(sameOrDiffArr[0]) {
        fourthColumn.splice(0, 2, fourthColumn[0]+fourthColumn[1]);
        if(sameOrDiffArr[2]) {
          fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2]);
        }
      }

      else if (sameOrDiffArr[1]) {
        fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2]);
      }

      else if (sameOrDiffArr[2]) {
        fourthColumn.splice(2, 2, fourthColumn[2]+fourthColumn[3]);
      }
    }

    //when the number of elements of fourth column which is not 0 is three
    else if(fourthColumn.length === 3) {
      const sameOrDiffArr = [
        fourthColumn[0]===fourthColumn[1],
        fourthColumn[1]===fourthColumn[2]]

      if(sameOrDiffArr[0]) {
        fourthColumn.splice(0, 2, fourthColumn[0]+fourthColumn[1]);
      }

      else if(sameOrDiffArr[1]) {
        fourthColumn.splice(1, 2, fourthColumn[1]+fourthColumn[2])
      }
  }

    //when the number of elements of fourth column which is not 0 is two
    else if(fourthColumn.length === 2) {
      if(fourthColumn[0] === fourthColumn[1]) {
        fourthColumn = [fourthColumn[0]+fourthColumn[1]];
      }
    }

    if (fourthColumn.length === 3) fourthColumn.push(0);
    if (fourthColumn.length === 2) fourthColumn.push(0, 0);
    if (fourthColumn.length === 1) fourthColumn.push(0, 0, 0);
    if (fourthColumn.length === 0) fourthColumn.push(0, 0, 0, 0);

    [updatedGame[3][3], updatedGame[2][3], updatedGame[1][3], updatedGame[0][3]] = fourthColumn;
    //fourth column end
    changeGame(updatedGame);
    updateColor();
  }

  function updateColor() {
    let updatedColor = [...color];

    for (let i=0; i < 4; i++) {
      for (let j=0; j<4; j++) {
        if(game[i][j] === 0) updatedColor[i][j] = "white";
        if(game[i][j] === 2) updatedColor[i][j] = "gray";
        if(game[i][j] === 4) updatedColor[i][j] = "orange";
        if(game[i][j] === 8) updatedColor[i][j] = "skyblue";
        if(game[i][j] === 16) updatedColor[i][j] = "green";
        
      }
    }
    changeColor(updatedColor);
  }

  return (
    <div className="App">
      <GameBoard 
      oneone = {game[0][0]}
      onetwo = {game[0][1]}
      onethree = {game[0][2]}
      onefour = {game[0][3]}
      twoone = {game[1][0]}
      twotwo = {game[1][1]}
      twothree = {game[1][2]}
      twofour = {game[1][3]}
      threeone = {game[2][0]}
      threetwo = {game[2][1]}
      threethree = {game[2][2]}
      threefour = {game[2][3]}
      fourone = {game[3][0]}
      fourtwo = {game[3][1]}
      fourthree = {game[3][2]}
      fourfour = {game[3][3]}
      oneoneColor = {color[0][0]}
      onetwoColor = {color[0][1]}
      onethreeColor = {color[0][2]}
      onefourColor = {color[0][3]}
      twooneColor = {color[1][0]}
      twotwoColor = {color[1][1]}
      twothreeColor = {color[1][2]}
      twofourColor = {color[1][3]}
      threeoneColor = {color[2][0]}
      threetwoColor = {color[2][1]}
      threethreeColor = {color[2][2]}
      threefourColor = {color[2][3]}
      fouroneColor = {color[3][0]}
      fourtwoColor = {color[3][1]}
      fourthreeColor = {color[3][2]}
      fourfourColor = {color[3][3]}
        />
      <div>
        <button onClick={up}>up</button>
        <button onClick={left}>left</button>
        <button onClick={right}>right</button>
        <button onClick={down}>down</button>
      </div>
    </div>
  );
}

function GameBoard(props) {
  return (
    <div>
      <div className="GameBoard-row">
        <div className={`GameBoard-space ${props.oneoneColor}`}>{props.oneone}</div>
        <div className={`GameBoard-space ${props.onetwoColor}`}>{props.onetwo}</div>
        <div className={`GameBoard-space ${props.onethreeColor}`}>{props.onethree}</div>
        <div className={`GameBoard-space ${props.onefourColor}`}>{props.onefour}</div>
      </div>
      <div className="GameBoard-row">
        <div className={`GameBoard-space ${props.twooneColor}`}>{props.twoone}</div>
        <div className={`GameBoard-space ${props.twotwoColor}`}>{props.twotwo}</div>
        <div className={`GameBoard-space ${props.twothreeColor}`}>{props.twothree}</div>
        <div className={`GameBoard-space ${props.twofourColor}`}>{props.twofour}</div>
      </div>
      <div className="GameBoard-row">
        <div className={`GameBoard-space ${props.threeoneColor}`}>{props.threeone}</div>
        <div className={`GameBoard-space ${props.threetwoColor}`}>{props.threetwo}</div>
        <div className={`GameBoard-space ${props.threethreeColor}`}>{props.threethree}</div>
        <div className={`GameBoard-space ${props.threefourColor}`}>{props.threefour}</div>
      </div>
      <div className="GameBoard-row">
        <div className={`GameBoard-space ${props.fouroneColor}`}>{props.fourone}</div>
        <div className={`GameBoard-space ${props.fourtwoColor}`}>{props.fourtwo}</div>
        <div className={`GameBoard-space ${props.fourthreeColor}`}>{props.fourthree}</div>
        <div className={`GameBoard-space ${props.fourfourColor}`}>{props.fourfour}</div>
      </div>
    </div>
  )
}

export default App;