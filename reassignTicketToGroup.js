var list = new GlideRecord("sc_task");
list.addQuery('assignment_group','a3d051a66fca530064df52ee2c3ee489');
list.query();
while (list.next()) {
    list.setValue('assignment_group','519e6b8d87c479d8a870dce83cbb3599');
    list.update();
};

