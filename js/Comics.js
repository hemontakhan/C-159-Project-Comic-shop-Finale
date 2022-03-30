AFRAME.registerComponent("comic", {
    schema:{
      state : {type : 'string', default: 'normal-view'},
      bookId : {type : 'string', default: '#book1'}
    },
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
    tick:function(){
     const {state} = this.getAttribute('comic')
     if(state === 'info-view'){
      const fadebackgroundEl = document.querySelector('#fade-background')
      fadebackgroundEl.setAttribute('visible',true);
  
      const selecteditemId = ['Superman','Spiderman','Batman','Ironman']
  
    
        fadebackgroundEl.setAttribute('info-banner',{
           itemId : selecteditemId
         })  
     }
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
            id: 'Superman',
            title:'Superman',
            url:'assets/Superman.png'
        },
        {
         id: 'Spiderman',
         title:'Spiderman',
         url:'assets/Spiderman.png'
     },
     {
         id: 'Batman',
         title:'Batman',
         url:'assets/Batman.png'
     },
     {
         id: 'Ironman',
         title:'Ironman',
         url:'assets/Ironman.png'
     }
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 10;
        const posZ = -20;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        const borderEl = this.createBorder(position,item)

        const coverEl = this.createThumbNailItem(position,item);
        borderEl.appendChild(coverEl)
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityE1 = document.createElement('a-entity')
      entityE1.setAttribute('id',id)
      entityE1.setAttribute('visible',true)
      entityE1.setAttribute('geometry',{
        primitive: 'plane',
        width: 25,
        height: 25,
      })     
     entityE1.setAttribute('position',position)
     entityE1.setAttribute('material',{
       color: 'white',
       opacity:0.1
     })

     entityE1.setAttribute('cursor-listener',{})
     return entityE1

    },
    
    createThumbNailItem: function(position,item){
     const entityE1 = document.createElement('a-entity')
     entityE1.setAttribute('visible',true)
     entityE1.setAttribute('geometry',{
      primitive: 'plane',
      width: 20,
      height: 20,
     })
     entityE1.setAttribute('material',{
      src: item.url,
      opacity: 5
    })
    const entityPosition = position
    entityPosition.z = -19
    entityE1.setAttribute('position',entityPosition)
     return entityE1
    },

  });
  