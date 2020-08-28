<template>
    <el-backtop target="" :bottom="200" :right="150" style="width: 60px;height: 60px;background-color: rgb(254,144,29);">
            <div>
                <el-tooltip class="item" effect="dark" content="回到顶部" placement="top">
                    <el-button style="background-color: rgb(254,144,29);border: 1px solid rgb(254,144,29);border-radius: 50%;width: 80px;height: 80px;">
                        <i class="el-icon-upload2"></i>
                    </el-button>
                </el-tooltip>
                
            </div>
        </el-backtop>
</template>

<script>
    
</script>

<style scoped>
    .el-icon-upload2 {
        font-size: 25px;
        color: white;
    }
</style>