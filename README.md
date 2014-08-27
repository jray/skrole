```javascript
  skrole

    .firstScroll(function(){
      console.log( 'first scroll')
    })

    .scroll(function( direction ){
      console.log( 'you srolled ' + direction );
    });

  setTimeout( skrole.destroy, 5000 );
```
