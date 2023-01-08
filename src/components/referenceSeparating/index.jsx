import React from 'react'
import _ from 'lodash'

const ReferenceSeparating = () => {
    const someObject = {
        firstCustomKey: {
            secondCustomKey: {
                thirdCustomKey: {
                    fourthCustomKey: {
                        hello: 'im audrey'
                    }
                }
            }
        }
    }

    const anotherObject = _.cloneDeep(someObject) //lodash does deep clone and separate references deeply.


    anotherObject['firstCustomKey']['secondCustomKey']['thirdCustomKey']['fourthCustomKey']['hello'] = 2

    console.log('someObject', someObject);
    console.log('anotherObject', anotherObject);

    const someArray = [
        [
            [
                [
                    2
                ]
            ]
        ]
    ]

    const someAnotherArray = _.cloneDeep(someArray)
    someAnotherArray[0][0][0] = 12

    console.log('someArray', someArray);
    console.log('someAnotherArray', someAnotherArray);
    
    return (
        <div>
            reference 
        </div>
    )
}
export default ReferenceSeparating


