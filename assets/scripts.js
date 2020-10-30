/*

const data = 
[ 
  {
    msv : "LDT0001"
  },
  {
    msv : "LDT0003"
  },
  {
    msv : "LDT0005"
  }
]

const MaSV = (data)=>{
  const Mang = []
  let MAX = 0
  data.map(
    (x,index)=>
    {
      (index+1) === parseInt(x.msv.match(/\d/g).join("")) ? '' : Mang.push(index+1)
      MAX < parseInt(x.msv.match(/\d/g).join("")) ? MAX = parseInt(x.msv.match(/\d/g).join("")) : 0
    }
  )
  return "SV" + "0".repeat(4-(Mang.length > 0 ? Mang[0] : MAX+1).toString().length)+ (Mang.length > 0 ? Mang[0] : MAX+1)
}

console.log(MaSV(data))


//code: 
const datalist = [
    {
        msv: "SV0001",
        hoten: "Thanh Tung",
        namsinh: "03/09/1999"
    },
    {
        msv: "SV0002",
        hoten: "QTT",
        namsinh: "03/09/1999"
    },
    {
        msv: "SV0003",
        hoten: "QTT",
        namsinh: "03/09/1999"
    }
]
const list = [1, 2, 34]
const tong = 0
const a = () => {
    list.map(
        (x, index) => {alert("Phan tu thu " + (index + 1) + " Gia Tri " + x)
        }
        )
    alert(list.map((x, index) => x))

    
}

var _danhsachhtml = ''
window.onload = function test(){
    datalist.map(x=>_danhsachhtml+=`<li>
        ${x.msv} - ${x.hoten} - ${x.namsinh}
        </li>`)
    var tag_id = document.getElementById('DanhSachSinhVien');
    document.getElementById('DanhSachSinhVien').style.color = 'red'
    tag_id.innerHTML = _danhsachhtml;
    
}

// Them
const addsinhvien = async ()=>{
    
    datalist.push(
        {
            msv: MaSV(datalist),
            hoten: tensv.value,
            namsinh: NgaySinh.value
    })
    alert()
    console.log(tensv.value)
    console.log(datalist)
    window.onload = function test(){
        datalist.map(x=>_danhsachhtml+=`<li>
            ${x.msv} - ${x.hoten} - ${x.namsinh}
            </li>`)
        var tag_id = document.getElementById('DanhSachSinhVien');
        document.getElementById('DanhSachSinhVien').style.color = 'red'
        tag_id.innerHTML = _danhsachhtml;
    }
    window.localStorage.setItem('danhsach',datalist)
}

*/

const test = ()=>{
    console.log('a')
}
console.log('a')
const Check=(x)=>{
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color="rgb(255, 0, 0)";
        elements[i].style.fontSize="18px";
    }
    console.log('a')
}
window.onload = Check('tieude')