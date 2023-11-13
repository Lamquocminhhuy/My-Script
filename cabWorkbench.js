var list = new GlideRecord("cab_meeting");
var agendaItemData = [];
list.addQuery('sys_id', 'dd85fcff4702f11088477868f36d43a4');
list.query();
if (list.next()) {
    var agendaItem = new GlideRecord("cab_agenda_item");
    agendaItem.addEncodedQuery("cab_meeting=" + list.sys_id);
    agendaItem.query();
    while (agendaItem.next()) {
        agendaItemData.push({
            number: agendaItem.getDisplayValue('task'),
            short_description: agendaItem.task.short_description.toString(),
            risk: agendaItem.task.ref_change_request.risk.getDisplayValue(),
        });

    };
};

gs.print("Data length: "+ agendaItemData.length);
//gs.print(JSON.stringify(agendaItemData));

for (var i = 0; i < agendaItemData.length; i++) {
    gs.print(agendaItemData[i].number);
    
}

