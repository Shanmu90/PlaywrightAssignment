console.log ("calculateGrade");

let score = 80;
function calculateGrade(score){
    console.log (score);
    switch(true)
    {
            case (score = 100):
                {
                    console.log ("Student is A grade");
                    break;
                }
           
            case (score >= 80):
                {
                    console.log ("Student is B grade");
                    break;
                }
            
                case (score >= 60):
                {
                    console.log ("Student is C grade");
                    break;
                }
            
                default :
                {
                    console.log ("Score Missing");
                    break;
                }
            
              
    }
    
}
calculateGrade(score);
