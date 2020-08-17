$(document).ready(function () {
    $("#formOne").submit(function() {
      event.preventDefault();
        const sentence = $("#sentence").val();
        //alert(sentence);
        const sentence1 = sentence.split(' ');
        //alert(sentence1);
        let words = [];
      sentence1.forEach(function(element) {
        if (element.length >=3) {
          words.push(element);
        }

      });

      words.reverse();
      let newSentence = words.join(' ');
      //alert(newSentence);
      $('#newSentence').append(newSentence);
    });
   
    


});