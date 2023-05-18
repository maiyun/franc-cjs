import * as franc from './index';

var mask = document.getElementById('mask')!;
mask.style.display = 'none';

// --- francAll 按钮 ---

document.getElementById('francAll')?.addEventListener('click', function() {
    document.getElementById('pre')!.innerHTML = JSON.stringify(franc.francAll((document.getElementById('text') as HTMLInputElement).value), undefined, 4);
});
document.getElementById('francAll2')?.addEventListener('click', function() {
    document.getElementById('pre2')!.innerHTML = JSON.stringify(franc.francAll((document.getElementById('text2') as HTMLInputElement).value), undefined, 4);
});