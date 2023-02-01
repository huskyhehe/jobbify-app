function Loading({ dashboard }) {
    return <div className={dashboard ? 'loading loading-dashboard' : 'loading'}></div>
}
  
  export default Loading;