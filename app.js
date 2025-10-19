    var getValue = document.getElementById ('digits');
    var result = document.getElementById ('result');

    function getData (data) {

        
        getValue.value += data

        console.log(data)
        }


        function clearData () {

            getValue.value = '';
            // result.value = '';

        }

        function deleteValue () {
            getValue.value = getValue.value.slice (0,-1);
        }

        function calculateNow () {
            var opt = ['/','+','-', '%','*','.'];

            var newText = getValue.value;

            for(var i = 0 ; i < opt.length; i++)  {
                if(
                    newText.startsWith(opt[i]) ||
                    newText.endsWith(opt[i])  ||
                    newText.includes (opt[i] + opt [i])) {
                        result.value = 'Error';
                        return;
                    }  
                
            } 

            result.value = eval(newText)

            }
           


