
window.addEventListener(`load`,function () {
    let block = document.getElementById(`block`);
    
    // position y-block
    let _posY = document.getElementById(`pos-y`);
    _posY.addEventListener('input',function () {
        block.style.top = _posY.value + 'px'
    })
    // position x-block 
    let _posX = document.getElementById(`pos-x`);
    _posX.addEventListener('input',function () {
       block.style.left = _posX.value + 'px'
    })
    // size the block
    let _size = document.getElementById(`Size`);
    _size.addEventListener('input',function () {
        block.style.width = (_size.value)*150 + 'px'
        block.style.height = (_size.value)*150 + 'px'
    })
    //  Opacity the block
    let _opacity = document.getElementById(`opacity`);
    _opacity.addEventListener('input',function () {
        block.style.opacity = _opacity.value
    })
    //  shape block
    let _shape = document.getElementById(`shape-select`);
    let _ok = document.getElementById(`ok-shape`)
    _shape.addEventListener(`change`,function () {
        // console.log(`you selected:`, _shape.value)
        if (_shape.value == 2) {
            _ok.addEventListener(`click`,function () {
                block.style.borderRadius = `50%`;
                block.style.removeProperty(`transform`);    
            })   
        }
        else if (_shape.value == 3) {
            _ok.addEventListener(`click`,function () {
                block.style.removeProperty(`border-radius`) ; 
                block.style.transform = `rotate(45deg) skew(5deg, 5deg)`;  
            })   
        }
        else if (_shape.value == 1) {
            _ok.addEventListener(`click`,function () {
                block.style.removeProperty(`transform`) ;
                block.style.removeProperty(`border-radius`) ;  
            })   
        }
    })
    // hex the block
    let _hex = document.getElementById(`hex`)
    _hex.addEventListener(`input`,function () {
        block.style.backgroundColor = `#${_hex.value}`
    })
    // RGBA the block
    let _rgba  
    // -------------------------------------------------------method one
    // let _rgba_r = document.getElementById(`rgba-r`);
    // let _rgba_g = document.getElementById(`rgba-g`);
    // let _rgba_b = document.getElementById(`rgba-b`);
    // let _rgba_a = document.getElementById(`rgba-a`);
    // _rgba_r.addEventListener(`input`,function () {
    //     block.style.backgroundColor = `rgba(${_rgba_r.value},${_rgba_g.value},${_rgba_b.value},${_rgba_a.value})`
    // })
    // _rgba_g.addEventListener(`input`,function () {
    //     block.style.backgroundColor = `rgba(${_rgba_r.value},${_rgba_g.value},${_rgba_b.value},${_rgba_a.value})`
    // })
    // _rgba_b.addEventListener(`input`,function () {
    //     block.style.backgroundColor = `rgba(${_rgba_r.value},${_rgba_g.value},${_rgba_b.value},${_rgba_a.value})`
    // })
    // _rgba_a.addEventListener(`input`,function () {
    //     block.style.backgroundColor = `rgba(${_rgba_r.value},${_rgba_g.value},${_rgba_b.value},${_rgba_a.value})`
    // })
    // ----------------------------------------------------------method two


 })








