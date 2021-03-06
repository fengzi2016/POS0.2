/**
 * Created by root on 17-7-12.
 */
'use strict';
var base_list=[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00
    },
    {
        barcode: 'ITEM000002',
        name: '苹果',
        unit: '斤',
        price: 5.50
    },
    {
        barcode: 'ITEM000003',
        name: '荔枝',
        unit: '斤',
        price: 15.00
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00
    },
    {
        barcode: 'ITEM000005',
        name: '方便面',
        unit: '袋',
        price: 4.50
    }
];
var barcode_collection= [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
];
function compute_count(barcode_collection){
    var tag=barcode_collection[0];
    var compute_count_a=[];
    var k=0;
    compute_count_a[0]={};
    compute_count_a[0].barcode=tag;
    compute_count_a[0].count=1;
    for(var i=1;i<barcode_collection.length;i++){
        if(barcode_collection[i]===tag){
            compute_count_a[k].count++;
        }
        else{
            ++k;
            compute_count_a[k]={};
            compute_count_a[k].count=1;
            compute_count_a[k].barcode=barcode_collection[i];
            tag=barcode_collection[i];
        }
    }
    return compute_count_a;
}

/*4:50*/
function count_number(base_list,compute_count) {
    var count_number_a = [];
    var k = 0;
    for (var i = 0; i < compute_count.length; i++) {
        count_number_a[k] = {};
        for (var j = 0; j < base_list.length; j++) {
            if (compute_count[i].barcode === base_list[j].barcode) {
                count_number_a[k].barcode = base_list[j].barcode;
                count_number_a[k].price = base_list[j].price;
                count_number_a[k].count = compute_count[i].count;
                count_number_a[k].unit = base_list[j].unit;
                count_number_a[k].name = base_list[j].name;
                k++;
                break;
            }
        }
    }
    return count_number_a;
}
/*8:20*/
function every_sum(count_number){
    var every_sum_a=[];
    for(var i=0;i<count_number.length;i++){
        every_sum_a.push(count_number[i].price*count_number[i].count);
    }
    return every_sum_a;
}
/*2:16*/
function all_sum(every_sum) {
    var all_sum_a=0;
    for(var i=0;i<every_sum.length;i++){
        all_sum_a+=every_sum[i];
    }
    return all_sum_a;
}
/*2:00*/
function print(count_number,every_sum,all_sum) {
    var str='***<没钱赚商店>收据***'+'\n';
    var str1='';
    for(var i=0;i<count_number.length;i++){
        str1=str1+'名称：'+count_number[i].name+'，数量：'+count_number[i].count+count_number[i].unit+','+
            '单价：'+count_number[i].price.toFixed(2)+'(元)，小计：'+every_sum[i].toFixed(2)+'(元)'+'\n';
    }
    var ge1='----------------------'+'\n';
    var ge2='**********************'+'\n';
    str=str+str1+ge1+'总计：'+all_sum.toFixed(2)+'(元)'+'\n'+ge2;
    return str;
}
/*8:46*/
var computeCount=compute_count(barcode_collection);
var countNumber=count_number(base_list,computeCount);
var everySum=every_sum(countNumber);
var allSum=all_sum(everySum);
var Print=print(countNumber,everySum,allSum);
console.log(Print);
  