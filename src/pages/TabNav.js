import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';


const text1 = `React 18 is now available on npm!

In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we’ll give an overview of what’s new in React 18, and what it means for the future.

Our latest major version includes out-of-the-box improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense.

Many of the features in React 18 are built on top of our new concurrent renderer, a behind-the-scenes change that unlocks powerful new capabilities. Concurrent React is opt-in — it’s only enabled when you use a concurrent feature — but we think it will have a big impact on the way people build applications.

We’ve spent years researching and developing support for concurrency in React, and we’ve taken extra care to provide a gradual adoption path for existing users. Last summer, we formed the React 18 Working Group to gather feedback from experts in the community and ensure a smooth upgrade experience for the entire React ecosystem.

In case you missed it, we shared a lot of this vision at React Conf 2021:

In the keynote, we explain how React 18 fits into our mission to make it easy for developers to build great user experiences
Shruti Kapoor demonstrated how to use the new features in React 18
Shaundai Person gave us an overview of streaming server rendering with Suspense
Below is a full overview of what to expect in this release, starting with Concurrent Rendering.

Note for React Native users: React 18 will ship in React Native with the New React Native Architecture. For more information, see the React Conf keynote here.`

const text2 = `What is Concurrent React?
The most important addition in React 18 is something we hope you never have to think about: concurrency. We think this is largely true for application developers, though the story may be a bit more complicated for library maintainers.

Concurrency is not a feature, per se. It’s a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time. You can think of concurrency as an implementation detail — it’s valuable because of the features that it unlocks. React uses sophisticated techniques in its internal implementation, like priority queues and multiple buffering. But you won’t see those concepts anywhere in our public APIs.

When we design APIs, we try to hide implementation details from developers. As a React developer, you focus on what you want the user experience to look like, and React handles how to deliver that experience. So we don’t expect React developers to know how concurrency works under the hood.

However, Concurrent React is more important than a typical implementation detail — it’s a foundational update to React’s core rendering model. So while it’s not super important to know how concurrency works, it may be worth knowing what it is at a high level.

A key property of Concurrent React is that rendering is interruptible. When you first upgrade to React 18, before adding any concurrent features, updates are rendered the same as in previous versions of React — in a single, uninterrupted, synchronous transaction. With synchronous rendering, once an update starts rendering, nothing can interrupt it until the user can see the result on screen.

In a concurrent render, this is not always the case. React may start rendering an update, pause in the middle, then continue later. It may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted. To do this, it waits to perform DOM mutations until the end, once the entire tree has been evaluated. With this capability, React can prepare new screens in the background without blocking the main thread. This means the UI can respond immediately to user input even if it’s in the middle of a large rendering task, creating a fluid user experience.

Another example is reusable state. Concurrent React can remove sections of the UI from the screen, then add them back later while reusing the previous state. For example, when a user tabs away from a screen and back, React should be able to restore the previous screen in the same state it was in before. In an upcoming minor, we’re planning to add a new component called <Offscreen> that implements this pattern. Similarly, you’ll be able to use Offscreen to prepare new UI in the background so that it’s ready before the user reveals it.

Concurrent rendering is a powerful new tool in React and most of our new features are built to take advantage of it, including Suspense, transitions, and streaming server rendering. But React 18 is just the beginning of what we aim to build on this new foundation.`

const text3 = `Gradually Adopting Concurrent Features
Technically, concurrent rendering is a breaking change. Because concurrent rendering is interruptible, components behave slightly differently when it is enabled.

In our testing, we’ve upgraded thousands of components to React 18. What we’ve found is that nearly all existing components “just work” with concurrent rendering, without any changes. However, some of them may require some additional migration effort. Although the changes are usually small, you’ll still have the ability to make them at your own pace. The new rendering behavior in React 18 is only enabled in the parts of your app that use new features.

The overall upgrade strategy is to get your application running on React 18 without breaking existing code. Then you can gradually start adding concurrent features at your own pace. You can use <StrictMode> to help surface concurrency-related bugs during development. Strict Mode doesn’t affect production behavior, but during development it will log extra warnings and double-invoke functions that are expected to be idempotent. It won’t catch everything, but it’s effective at preventing the most common types of mistakes.

After you upgrade to React 18, you’ll be able to start using concurrent features immediately. For example, you can use startTransition to navigate between screens without blocking user input. Or useDeferredValue to throttle expensive re-renders.

However, long term, we expect the main way you’ll add concurrency to your app is by using a concurrent-enabled library or framework. In most cases, you won’t interact with concurrent APIs directly. For example, instead of developers calling startTransition whenever they navigate to a new screen, router libraries will automatically wrap navigations in startTransition.

It may take some time for libraries to upgrade to be concurrent compatible. We’ve provided new APIs to make it easier for libraries to take advantage of concurrent features. In the meantime, please be patient with maintainers as we work to gradually migrate the React ecosystem.

For more info, see our previous post: How to upgrade to React 18.`




const Container = styled.div `

`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`
const Button = styled.button`
  background-color: transparent;
  border: 0px none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  color: ${props => props.selected ? '#ccc' : '#000'};
  transition-duration: 0.5s;
`
const Contents = styled.div`
  overflow: hidden;
`

const PageGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  top: 0px;
  left: ${props => `calc(${props.selectPage * -100}% + ${props.movement}px)`};
  transition-duration: ${props => props.movement === 0 ? '0.1' : '0'}s;
`

const Page = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: calc(100vh - 120px);
  overflow: auto;
`
const PageContent = styled.pre`
  word-wrap: char;
  padding: 18px;
  font-weight: bold;
  white-space: pre-wrap;
  font-family: 맑은고딕;
`

const buttons = [
  'button 1',
  'button 2',
  'button 3',
]

const TabNav = () => {
  const [selectPage, setSelectPage] = useState(0);
  const [movement, setMovement] = useState(0);
  const isTouch = useRef(false);
  const touchPos = useRef(0);

  useEffect(() => {
    // contentsRef.current.scrollTo(selectPage * contentsRef.current.clientWidth, 0)
    
  }, [selectPage])
  
  const handleTouchEvent = (e) => {
    // console.log(e.type)
    switch(e.type){
      case 'mousedown': case 'touchstart':
        touchStart(e);
        break;
      case 'touchmove': case 'mousemove':
        touchMove(e);
        break;
      case 'touchend': case 'mouseup': case 'mouseleave':
        touchEnd(e);
        break;
      default: return;
    }
  }

  const touchStart = (e) => {
    isTouch.current = true;
    if(e.type === 'touchstart'){
      touchPos.current = e.targetTouches[0].pageX;
    } else {
      touchPos.current = e.pageX;
    }
  }
  const touchMove = (e) => {
    if( isTouch.current ) {
      // console.log(e)
      let pos;
      if(e.type === 'touchmove') {
        pos = e.targetTouches[0].pageX;
      } else {
        pos = e.pageX;
      }
      let newMovement = pos - touchPos.current;
      setMovement(newMovement);
    }
  }
  const touchEnd = (e) => {
    if(isTouch.current === false) return;
    isTouch.current = false;
    setMovement(0)
    let endPos = 0;
    if(e.type === 'touchend') {
      endPos = e.changedTouches[0].pageX
    } else {
      endPos = e.pageX;
    }
    let startPos = touchPos.current;
    let diff = startPos - endPos;
    if(diff > 100) {
      fnNext();
    } else if (diff < -100) {
      fnPrev();
    }
    touchPos.current = 0;
  }

  const fnNext = () => {
    let nextPage;
    if(selectPage >= buttons.length - 1) {
      // nextPage = 0;
      nextPage = selectPage;
    } else {
      nextPage = selectPage + 1;
    }
    setSelectPage(nextPage);
  }
  const fnPrev = () => {
    let nextPage;
    if(selectPage <= 0) {
      // nextPage = buttons.length - 1;
      nextPage = selectPage;
    } else {
      nextPage = selectPage - 1;
    }
    setSelectPage(nextPage);
  }

  return (
    <Container>
      <ButtonGroup>
        {buttons.map((button, index) => (
          <Button selected={index === selectPage} key={index}
            onClick={() => {setSelectPage(index)}}
          >{button}</Button>
        ))}
      </ButtonGroup>
      <Contents
        onTouchStart={handleTouchEvent}
        onTouchMove={handleTouchEvent}
        onTouchEnd={handleTouchEvent}
        // onMouseMove={handleTouchEvent}
        // onMouseDown={handleTouchEvent}
        // onMouseUp={handleTouchEvent}
        // onMouseLeave={handleTouchEvent}
      >
        <PageGroup selectPage={selectPage} movement={movement}>
          <Page style={{backgroundColor: '#fcf'}}><PageContent>{'text1'}</PageContent></Page>
          <Page style={{backgroundColor: '#cdf'}}><PageContent>{'text2'}</PageContent></Page>
          <Page style={{backgroundColor: '#fcd'}}><PageContent>{'text3'}</PageContent></Page>
        </PageGroup>
      </Contents>
    </Container>
  )
}
export default TabNav;