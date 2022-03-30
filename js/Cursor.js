AFRAME.registerComponent('cursor-listener',{
 schema:{
   ComicId : {type: "string",default:'#book',}
 },
init: function(){
    this.handleMouseEnterEvent();
    this.handleMouseLeaveEvent();
},
handleCursorEvent: function(){
  this.el.addEventListener('comic',evt =>{
     const posterContainer = document.querySelector('#posterContainer')
     const {state} = posterContainer.getAttribute('comic')
     if(state === 'normal-view'){
      posterContainer.setAttribute('cursor-listener',{
         state : 'info-view'
      })
     } 
     
  })

},
handleMouseEnterEvent: function(){
 this.el.addEventListener('mouseenter',() =>{
     this.handleCursorEvent()
 }) 

},
handleMouseLeaveEvent: function(){
 this.el.addEventListener('mousedown',()=>{
    const {ComicId} = this.data
    if(ComicId){
       const el = document.querySelector(`#${ComicId}`)
       const fadebackgroundEl = document.querySelector('#fade-background')       
       fadebackgroundEl.setAttribute('visible',false)
    }
 })
}
})