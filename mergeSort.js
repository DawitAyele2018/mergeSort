/* 

  # create an empty array(newArray)
  # compare the element of the 1st Array to the element of the second array
  # push the smallest one to the new array
  # repeat this untill one of the array is empty
  # finally push the remining elemtnts of the array to the new array

*/

function mergeArray(arr1, arr2){
    console.log(arr1[arr1.length])
    var newArr = [];
    var i =0, j = 0;
    while(i< arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }
        else if(arr1[i] > arr2[j]){
            newArr.push(arr2[j]);
            j++;
        }
        else{
            newArr.push(arr1[i]);
            i++;
            j++;
        }
    }
    console.log('arr1 '+arr1[i]);
    if(arr1[i]){
        while(i<arr1.length){
            newArr.push(arr1[i]);
            i++;
        }
    }
    console.log('arr2 '+arr2[j]);
    if(arr2[j]){
        while(j<arr2.length){
            newArr.push(arr2[j]);
            j++;
        }
    }
    return newArr;
}


console.log(mergeArray([5,9,10], [4,6,8,11,15]));
//          i         j
/* 
[4,6,8,11,15,24,12,34,16]
[4,6,8,11,15]  [24,12,34,16]
[4,6,8] [11,15]    [24,12][34,16]
[4,6] [ 8] [11,15]    [24,12][34,16]
[4][6][8] [11][15]    [24][12][34][16] */

function mergeSort(arr){
    if(arr.length===1) return arr;
    var mid = Math.floor((arr.length)/2)
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    return mergeArray(left, right);
}

console.log(mergeSort([5,9,10,4,50,6,8,11,15]));