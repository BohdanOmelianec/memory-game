import { useEffect, useState } from "react";

const useCalculateResult = (imagesLength: number = 0) => {
  const [firstEl, setFirstEl] = useState<HTMLDivElement>();
  const [secondEl, setSecondEl] = useState<HTMLDivElement>();
  const [checking, setChecking] = useState(false);
  const [quessed, setQuessed] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if(quessed && quessed === imagesLength ) {
      setTimeout(() => setIsFinished(true), 900)
    }
  }, [quessed, imagesLength])


  const clickHandler = (target: HTMLDivElement) => {
    if (checking
      || target.classList.contains("turned")
      || target.classList.contains("passed")
    ) return;

    target.classList.add("turned");

    if (!firstEl) {
      console.log("set first")
      setFirstEl(target);
    } else {
      console.log("set second")
      setSecondEl(target);
      setChecking(true);
      checkAnswers()
    }
  }

  const checkAnswers = () => {
    if(checking && firstEl && secondEl) {
      if (firstEl.dataset.src === secondEl.dataset.src) {
          firstEl.classList.add("passed");
          secondEl.classList.add("passed");
          setQuessed(quessed => quessed + 2);
      }
      
      setTimeout(resetCards, 900)
    }
  };
    
  const resetCards = () => {
    firstEl!.classList.remove("turned");
    secondEl!.classList.remove("turned");

    setChecking(false);
    setFirstEl(undefined);
    setSecondEl(undefined);
  }

  return { clickHandler, isFinished }

}

export default useCalculateResult;