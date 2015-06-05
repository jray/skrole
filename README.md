Skrole doesn't perform any operations on the window scroll event, which can be detrimental to performance. Instead it passes the computation onto requestAnimationFrame. It falls back to setInterval if requestAnimationFrame is unavailable.

```javascript
      skrole(function( direction ){
        console.log( 'you srolled ' + direction );
      })

        .idle(2000, function(){
          console.log( 'it has been 2 seconds since the last scroll event' );
          // 2 seconds is the default, you can likewise just pass in a callback
          // as the first argument or provide a different value
        });

      setTimeout( skrole.destroy, 5000 );
```
