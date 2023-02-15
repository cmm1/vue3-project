<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="index" width="80" />
    <el-table-column prop="zbName" label="名称" width="300" />
    <!-- <el-table-column prop="zbNotice" :formatter="caseTypeNamesFormat" label="内容" width="500" /> -->
    <el-table-column label="内容" width="300">
      <template #default="scope">
        <el-button size="small" @click="handleMessage(scope.$index, scope.row)">点击查看内容</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="zbUrl" label="地址" width="500" />
    <el-table-column prop="zbKey" label="关键词" width="200" />
  </el-table>

  <el-pagination background layout="prev, pager, next" :total="total" :page-size="10" :page-count="pages"
    :current-page="current" @current-change="getPageList" :pager-count="20" />

  <el-dialog v-model="centerDialogVisible" title="内容" width="100%" center>
    <template #footer>
      <!-- {{ centerDialogVisibleMessage }} -->
      <div ref="reportHTML" v-html="centerDialogVisibleMessage" class="web-con"></div>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      centerDialogVisible: false,
      centerDialogVisibleMessage: "",
      pageNumber: 1,
      pageSize: 10,
      total: 0,
      pages: 0,
      current: 1,
      tableData: []
    }
  },
  created() {
    this.getPageList();
  },
  methods: {
    getPageList(val) {
      const that = this
      if (val) {
        this.pageNumber = val
      }
      console.log(this.pageNumber)
      axios.get('api/pageList?pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize)
        .then(function (res) {
          that.tableData = res.data.records;
          that.total = res.data.total;
          that.pages = res.data.pages;
          that.current = res.data.current;
          console.log(res)
        })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    },
    handleMessage(index, row) {
      this.centerDialogVisible = true
      console.log(row)
      this.centerDialogVisibleMessage = row.zbNotice
    }
  },

  mounted() {
    //this.getPageList();
  },
}
</script>
