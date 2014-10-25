```javascript
  skrole

    .firstScroll(function(){
      console.log( 'first scroll' );
    })

    .scroll(function( direction ){
      console.log( 'you srolled ' + direction );
    })

    .onScrollTimeout(2000, function(){
        console.log( 'it has been 2 seconds since the last scroll event' );
        // 2 seconds is the default, you can likewise just pass in a callback
        // as the first argument or provide a different value
    });

  setTimeout( skrole.destroy, 5000 );
```
