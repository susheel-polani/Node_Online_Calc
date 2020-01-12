const router = require('express').Router();
let Result = require(`../models/history`);

router.route('/').post((req,res)=> {
    const operand1 = req.body.operand1;
    const operand2 = req.body.operand2;
    const operator = req.body.operator;
    var opresult=null;
    if(operator=='+')
    {
        opresult = (parseInt(operand1)+parseInt(operand2)).toString();
        console.log(opresult);
    }
    else if(operator=='-')
    {
        opresult = (parseInt(operand1)-parseInt(operand2)).toString();
        console.log(opresult);
    }
    else if(operator=='*')
    {
        opresult = (parseInt(operand1)*parseInt(operand2)).toString();
        console.log(opresult);
    }
    else if(operator=='/')
    {
        opresult = (parseInt(operand1)/parseInt(operand2)).toString();
        console.log(opresult);
    }
    const result=opresult;
    console.log(operator);
    const newResult = new Result({operand1,operand2,operator,result});
    newResult.save()
        .then(() => res.json('New Operation Added'))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;