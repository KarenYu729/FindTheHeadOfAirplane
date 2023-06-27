<img width="919" alt="1687832112043" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/5f121ad0-d1e6-44f0-b9fe-9c1c3d690abb">
<img width="919" alt="1687832118733" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/932e406f-d6c2-44da-9ed9-f62578f4b095">

reveal for revealing all grids.
reload for reloading the page.
each time we find the head of the two planes, alert, OK for reloading, cancel for revealing.
# game in season 1
## only one type plane

<img width="119" alt="1687831001825" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/3b198ce0-c199-4342-8530-1cbf732d5cc1">

Randomly place two of this plane on the canvas, click on each grid, check if this grid represents some part of the plane.

## How to place each plane?
For each plane, we use a square to initially represent this plane, randomly pick a position as the left upper corner of this square, as shown below (the red dot):
<img width="117" alt="1687831326825" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/bc1a8c64-cd23-4e4a-afcc-00e54c3985e2">
Need to check if the left upper corner is valid, for each direction.

Also, we need a random direction for each plane, to  represent:
<img width="119" alt="1687831463016" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/780b5065-7a9e-473e-b8c3-7e4310bb9cd3">
<img width="93" alt="1687831484877" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/c527c08d-7020-45cf-afcd-5a008806c65b">
<img width="119" alt="1687831001825" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/3b198ce0-c199-4342-8530-1cbf732d5cc1">
<img width="94" alt="1687831562267" src="https://github.com/KarenYu729/FindTheHeadOfAirplane/assets/97644710/6151af95-6e87-4341-a37e-38b714efba1b">

upload the infomation of the position of the airplane in the position matrix.

For the second plane, apart from previous check, need to check the position matrix, make sure two planes will net overlap.

# 是名学第一季的寻机头
只采用一种飞机类型，如上图所示（或者去看节目也一样~）
随机放置飞机。对于每个飞机，随机选择飞机所在方块的左上角的坐标和飞机的朝向，只有坐标和朝向都合理（飞机不会掉出去），才通过这两个随机的值确定飞机每个点的坐标，在坐标矩阵中更新位置。
第二架飞机要额外确认两架飞机没有重合。

reveal揭开所有
reload刷新
找到两个机头之后，弹出提示框，OK->reload，cancel->reveal。
