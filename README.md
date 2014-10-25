```javascript
  skrole

    .firstScroll(function(){
      console.log( 'first scroll' );
    })

    .scroll(function( direction ){
      console.log( 'you srolled ' + direction );
    })

    .onScrollTimeout(function(){
        console.log( 'it has been 2 seconds since the last scroll event' );
    });

  setTimeout( skrole.destroy, 5000 );
```
