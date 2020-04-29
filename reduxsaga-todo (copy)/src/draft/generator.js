console.log('a')

function* generatorFunction() {
    yield 2019 // dừng 
    return 'acb' // kết thúc tại đây hoặc dụng throw để kết thúc ngay function 
}

// để trả về giá trị có thể dùng từ khóa yield hoặc return


 const execute = generatorFunction();  // khi thực thi 1 generator function thì return 1 chuỗi các KQ gọi là iterators
 console.log('result 1: ',execute.next())
 console.log('result 2: ',execute.next())

// khi gọi next, các câu lệnh trong generatorFunction thực thi cho đến khi gặp từ khóa yield thì giá trị dc trả về
// yield: dừng lại
// return: kết thúc, next tiếp theo ko dc thực thi 


// nếu ko gắn hàm vào biến. mỗi lần gọi nó sẽ tạo ra 1 đối tượng iterator mới
// console.log('result 1: ', generatorFunction().next())
// console.log('result 2: ', generatorFunction().next())

// ***Lưu ý
// mỗi khi hàm generator được thực thi, mỗi thực thể (instance) iterator được tạo ra khác biệt nhau
// cần lưu trữ vào biến để tái sử dụng lần sau 

// ******kết luận
// yield và return có thể dùng trong generator function để trả về gt
// yield trả về iterator có giá trị done là false
// return trả về iterator có giá trị done là true
// để thoat khỏi generator function nếu có lỗi xảy ra ta dùng throw
// khác biệt: yield trả về done là false 