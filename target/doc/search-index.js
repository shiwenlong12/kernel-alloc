var searchIndex = JSON.parse('{\
"cfg_if":{"doc":"A macro for defining <code>#[cfg]</code> if-else statements.","t":[14],"n":["cfg_if"],"q":["cfg_if"],"d":["The main macro provided by this crate. See crate …"],"i":[0],"f":[0],"p":[]},\
"customizable_buddy":{"doc":"伙伴分配器。","t":[3,8,3,8,18,18,3,8,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,10,11,11,11,11,11,11,11,11,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["BuddyAllocator","BuddyCollection","BuddyError","BuddyLine","EMPTY","INTRUSIVE_META_SIZE","LinkedListBuddy","OligarchyCollection","UsizeBuddy","allocate","allocate_layout","allocate_type","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","capacity","clone","deallocate","deallocate_layout","eq","fmt","fmt","fmt","fmt","free","from","from","from","from","init","init","init","init","into","into","into","into","new","put","put","put","put","put","put","snatch","take","take","take","take_any","take_any","take_any","take_any","take_any","take_any","transfer","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id"],"q":["customizable_buddy","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["伙伴分配器。","伙伴集合。一组同阶的伙伴。","伙伴分配器分配失败。","伙伴分配器的一个行。","空集合。用于静态初始化。","侵入式元数据的大小。","侵入式链表伙伴行。","寡头集合。伙伴分配器的顶层，不再合并。","用一个 usize …","分配。","分配符合 <code>layout</code> 布局的内存块。","分配可容纳 <code>T</code> 对象的内存块。","","","","","","","","","返回分配器管理的总容量。","","回收。","根据布局回收。","","","","","","返回分配器剩余的空间容量。","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","…","运行时初始化。","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","构造分配器。","放入一个元素 <code>idx</code>。","放入一个元素 <code>idx</code>。","","","","","从分配器夺走一个对齐到 <code>align_order</code> …","","","提取指定位置的元素，返回是否提取到。","提取任何 <code>count</code> 个满足 <code>align_order</code> 的内存块。","提取任何一个满足 <code>align_order</code> 的内存块。","","","","","将一个 <code>ptr</code> 指向的长度为 <code>usize</code> …","","","","","","","","","","","",""],"i":[0,0,0,0,18,18,0,0,0,3,3,3,11,14,3,6,11,14,3,6,3,6,3,3,6,11,14,3,6,3,11,14,3,6,11,14,18,3,11,14,3,6,3,1,2,11,11,14,14,3,11,14,18,1,2,11,11,14,14,3,11,14,3,6,11,14,3,6,11,14,3,6],"f":[0,0,0,0,0,0,0,0,0,[[[3,[1,2]],4,5],[[7,[6]]]],[[[3,[1,2]],8],[[7,[6]]]],[[[3,[1,2]]],[[7,[6]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[3,[1,2]]],4],[6,6],[[[3,[1,2]],9,4]],[[[3,[1,2]],9,8]],[[6,6],10],[[11,12],13],[[14,12],13],[[[3,[[0,[1,15]],[0,[2,15]]]],12],13],[[6,12],13],[[[3,[1,2]]],4],[[]],[[]],[[]],[[]],[[11,4,4]],[[14,4,4]],[[4,4]],[[[3,[1,2]],4,9]],[[]],[[]],[[]],[[]],[[],[[3,[1,2]]]],[4],[4,[[16,[4]]]],[[11,4],[[16,[4]]]],[[11,4]],[[14,4],[[16,[4]]]],[[14,4]],[[[3,[1,2]],4,5],[[7,[6]]]],[[11,4],10],[[14,4],10],[4,10],[[4,4],[[16,[4]]]],[4,[[16,[4]]]],[[11,4,4],[[16,[4]]]],[[11,4],[[16,[4]]]],[[14,4,4],[[16,[4]]]],[[14,4],[[16,[4]]]],[[[3,[1,2]],9,4]],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],7],[[],17],[[],17],[[],17],[[],17]],"p":[[8,"OligarchyCollection"],[8,"BuddyCollection"],[3,"BuddyAllocator"],[15,"usize"],[3,"NonZeroUsize"],[3,"BuddyError"],[4,"Result"],[3,"Layout"],[3,"NonNull"],[15,"bool"],[3,"UsizeBuddy"],[3,"Formatter"],[6,"Result"],[3,"LinkedListBuddy"],[8,"Debug"],[4,"Option"],[3,"TypeId"],[8,"BuddyLine"]]},\
"kernel_alloc":{"doc":"内存分配。","t":[5,5],"n":["init","transfer"],"q":["kernel_alloc",""],"d":["初始化内存分配。","将一个内存块托管到内存分配器。"],"i":[0,0],"f":[[1],[[]]],"p":[[15,"usize"]]},\
"log":{"doc":"A lightweight logging facade.","t":[13,13,13,13,13,13,4,4,8,3,3,13,3,3,3,17,3,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,14,10,11,11,11,11,11,11,11,14,11,11,11,11,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,14,14,5,11,11,11,11,11,11,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,5,11,11,11,11,11,11,14,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,14],"n":["Debug","Debug","Error","Error","Info","Info","Level","LevelFilter","Log","Metadata","MetadataBuilder","Off","ParseLevelError","Record","RecordBuilder","STATIC_MAX_LEVEL","SetLoggerError","Trace","Trace","Warn","Warn","args","args","as_str","as_str","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build","build","builder","builder","clone","clone","clone","clone","cmp","cmp","cmp","cmp","debug","enabled","eq","eq","eq","eq","eq","eq","eq","error","file","file","file_static","file_static","flush","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from_str","from_str","ge","ge","ge","ge","gt","gt","gt","gt","hash","hash","hash","hash","info","into","into","into","into","into","into","into","into","iter","iter","le","le","le","le","level","level","level","level","line","line","log","log","log_enabled","logger","lt","lt","lt","lt","max","max","max_level","metadata","metadata","module_path","module_path","module_path_static","module_path_static","new","new","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","set_logger","set_logger_racy","set_max_level","target","target","target","target","to_level","to_level_filter","trace","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","warn"],"q":["log","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The “debug” level.","Corresponds to the <code>Debug</code> log level.","The “error” level.","Corresponds to the <code>Error</code> log level.","The “info” level.","Corresponds to the <code>Info</code> log level.","An enum representing the available verbosity levels of the …","An enum representing the available verbosity level filters …","A trait encapsulating the operations required of a logger.","Metadata about a log message.","Builder for <code>Metadata</code>.","A level lower than all log levels.","The type returned by <code>from_str</code> when the string doesn’t …","The “payload” of a log message.","Builder for <code>Record</code>.","The statically resolved maximum log level.","The type returned by <code>set_logger</code> if <code>set_logger</code> has already …","The “trace” level.","Corresponds to the <code>Trace</code> log level.","The “warn” level.","Corresponds to the <code>Warn</code> log level.","The message body.","Set <code>args</code>.","Returns the string representation of the <code>Level</code>.","Returns the string representation of the <code>LevelFilter</code>.","","","","","","","","","","","","","","","","","Invoke the builder and return a <code>Record</code>","Returns a <code>Metadata</code> object.","Returns a new builder.","Returns a new builder.","","","","","","","","","Logs a message at the debug level.","Determines if a log message with the specified metadata …","","","","","","","","Logs a message at the error level.","The source file containing the message.","Set <code>file</code>","The module path of the message, if it is a <code>&#39;static</code> string.","Set <code>file</code> to a <code>&#39;static</code> string.","Flushes any buffered records.","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","","","Logs a message at the info level.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Iterate through all supported logging levels.","Iterate through all supported filtering levels.","","","","","The verbosity level of the message.","Set <code>Metadata::level</code>.","The verbosity level of the message.","Setter for <code>level</code>.","The line containing the message.","Set <code>line</code>","Logs the <code>Record</code>.","The standard logging macro.","Determines if a message logged at the specified level in …","Returns a reference to the logger.","","","","","Returns the most verbose logging level.","Returns the most verbose logging level filter.","Returns the current maximum log level.","Metadata about the log directive.","Set <code>metadata</code>. Construct a <code>Metadata</code> object with …","The module path of the message.","Set <code>module_path</code>","The module path of the message, if it is a <code>&#39;static</code> string.","Set <code>module_path</code> to a <code>&#39;static</code> string","Construct new <code>RecordBuilder</code>.","Construct a new <code>MetadataBuilder</code>.","","","","","","","Sets the global logger to a <code>&amp;&#39;static Log</code>.","A thread-unsafe version of <code>set_logger</code>.","Sets the global maximum log level.","The name of the target of the directive.","Set <code>Metadata::target</code>","The name of the target of the directive.","Setter for <code>target</code>.","Converts <code>self</code> to the equivalent <code>Level</code>.","Converts the <code>Level</code> to the equivalent <code>LevelFilter</code>.","Logs a message at the trace level.","","","","","","","","","","","","","","","","","","","","","","","","","Logs a message at the warn level."],"i":[4,6,4,6,4,6,0,0,0,0,0,6,0,0,0,0,0,4,6,4,6,1,3,4,6,4,6,1,3,8,7,15,11,4,6,1,3,8,7,15,11,3,7,1,8,4,6,1,8,4,6,8,7,0,19,4,4,6,6,8,7,11,0,1,3,1,3,19,4,4,6,6,1,3,8,7,15,15,11,11,4,6,1,3,8,7,15,11,4,6,4,4,6,6,4,4,6,6,4,6,8,7,0,4,6,1,3,8,7,15,11,4,6,4,4,6,6,1,3,8,7,1,3,19,0,0,0,4,4,6,6,4,6,0,1,3,1,3,1,3,3,7,4,4,6,6,8,7,0,0,0,1,3,8,7,6,4,0,4,6,1,3,8,7,15,11,4,6,1,3,8,7,15,11,4,6,1,3,8,7,15,11,0],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[[3,2],3],[4,5],[6,5],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3,1],[7,8],[[],3],[[],7],[4,4],[6,6],[1,1],[8,8],[[4,4],9],[[6,6],9],[[8,8],9],[[7,7],9],0,[8,10],[[4,6],10],[[4,4],10],[[6,4],10],[[6,6],10],[[8,8],10],[[7,7],10],[[11,11],10],0,[1,[[12,[5]]]],[[3,[12,[5]]],3],[1,[[12,[5]]]],[[3,[12,[5]]],3],[[]],[[4,13],14],[[4,13],14],[[6,13],14],[[6,13],14],[[1,13],14],[[3,13],14],[[8,13],14],[[7,13],14],[[15,13],14],[[15,13],14],[[11,13],14],[[11,13],14],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[5,[[16,[4]]]],[5,[[16,[6]]]],[[4,4],10],[[4,6],10],[[6,6],10],[[6,4],10],[[4,4],10],[[4,6],10],[[6,4],10],[[6,6],10],[4],[6],[8],[7],0,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],17],[[],17],[[4,6],10],[[4,4],10],[[6,4],10],[[6,6],10],[1,4],[[3,4],3],[8,4],[[7,4],7],[1,[[12,[18]]]],[[3,[12,[18]]],3],[1],0,0,[[],19],[[4,4],10],[[4,6],10],[[6,4],10],[[6,6],10],[[],4],[[],6],[[],6],[1,8],[[3,8],3],[1,[[12,[5]]]],[[3,[12,[5]]],3],[1,[[12,[5]]]],[[3,[12,[5]]],3],[[],3],[[],7],[[4,6],[[12,[9]]]],[[4,4],[[12,[9]]]],[[6,6],[[12,[9]]]],[[6,4],[[12,[9]]]],[[8,8],[[12,[9]]]],[[7,7],[[12,[9]]]],[19,[[16,[15]]]],[19,[[16,[15]]]],[6],[1,5],[[3,5],3],[8,5],[[7,5],7],[6,[[12,[4]]]],[4,6],0,[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],[[],20],0],"p":[[3,"Record"],[3,"Arguments"],[3,"RecordBuilder"],[4,"Level"],[15,"str"],[4,"LevelFilter"],[3,"MetadataBuilder"],[3,"Metadata"],[4,"Ordering"],[15,"bool"],[3,"ParseLevelError"],[4,"Option"],[3,"Formatter"],[6,"Result"],[3,"SetLoggerError"],[4,"Result"],[8,"Iterator"],[15,"u32"],[8,"Log"],[3,"TypeId"]]},\
"page_table":{"doc":"x","t":[8,18,18,18,18,18,18,18,18,18,3,8,18,6,18,18,18,3,3,3,3,3,3,13,8,13,4,18,18,3,6,18,3,8,3,8,18,18,18,11,11,11,11,11,11,10,10,11,11,11,11,11,11,11,11,11,11,11,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,11,11,11,11,12,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11],"n":["Decorator","INVALID","INVALID","LEVEL_BITS","MAX","MAX","MAX","MAX","MAX_LEVEL","MIN","MaybeInvalidPPN","MmuMeta","PAGE_BITS","PPN","PPN_MASK","PPN_POS","P_ADDR_BITS","PageNumber","PageTable","PageTableFormatter","Physical","Pos","Pte","Pte","Space","Target","Update","VALID","VALID_FLAG","VAddr","VPN","V_ADDR_BITS","Virtual","Visitor","VmFlags","VmMeta","ZERO","ZERO","ZERO","add","add","add_assign","add_assign","align_level","align_level","arrive","arrive","as_mut_ptr","as_ptr","as_ptr","base","base","bitand","bitand_assign","bitor","bitor_assign","bitxor","bitxor_assign","block","block","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","build_pte","bytes_in_page","bytes_in_table","ceil","ceil","ceil","clear_ppn","clone","clone","clone","clone","clone","clone","clone","clone","cmp","cmp","cmp","cmp","cmp","contains","down","eq","eq","eq","eq","eq","eq","eq","f","flags","floor","floor","floor","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt_flags","from","from","from","from","from","from","from","from","from","from","from","from","from","from_raw","from_raw_parts","from_root","get","hash","hash","hash","hash","hash","hash","index","index_in","index_in","index_mut","into","into","into","into","into","into","into","into","into","into","into","invalid","is_huge","is_huge","is_huge","is_leaf","is_leaf","is_leaf","is_valid","is_valid","level","level","meet","meet","new","new","new","new","next","offset","pages_in_table","partial_cmp","partial_cmp","partial_cmp","partial_cmp","partial_cmp","ppn","ppn","prev","pt","range","set_ppn","stop","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","up","vaddr_range","vaddr_range","val","val","val","valid","vpn","walk","walk_mut"],"q":["page_table","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["<code>Meta</code> 方案的页表访问机制。","无效的物理页号，作为 NULL 使用。","无效的物理页号，作为 NULL 使用。","各级页内虚地址位数位数。","最大物理页号。","最大虚拟页号。","最大物理页号。","最大虚拟页号。","页表最大级别。","最小页号。","一个可能无效的物理页号。","地址转换单元元数据。","页内偏移的位数。","物理页号。","页表项中的物理页号掩码。","物理页号在 PTE 中的位置。","物理地址位数，用于计算物理页号形式。","页号。","页表。","页表格式化器。","物理地址空间。","<code>Meta</code> 方案中页表上的一个位置。","页表项。","新建中间页表。","地址空间标记。","修改目标。","遍历中断时的更新方案。","表示页表项有效的属性。","表示页表项有效的标志位。","虚拟地址。","虚拟页号。","…","虚地址空间。","<code>Meta</code> 方案的页表访问机制。","页表项属性。","页式虚存元数据。","页号零。","空页表项属性。","空白页表项。","","","","","虚页的对齐级别，使虚页在页表中序号为 0 …","虚页的对齐级别，使虚页在页表中序号为 0 …","到达 <code>target_hint</code> 节点。","到达 <code>target_hint</code> 节点。","将虚地址转化为任意可变指针。","获取指向第一个页表项的指针。","将虚地址转化为任意指针。","虚页的起始地址。","虚页的起始地址。","","","","","","","在访问 <code>target</code> 的过程中，经过一个包括 <code>target</code> …","在访问 <code>target</code> 的过程中，经过一个包括 <code>target</code> …","","","","","","","","","","","","","","","","","","","","","","","构造具有 <code>self</code> 页表项属性，并指向 <code>ppn</code> …","<code>level</code> 级页容纳的总字节数。","<code>level</code> 级页表容纳的总字节数。","不包含这个虚页的 <code>level</code> 级页表起始地址。","不包含这个虚页的 <code>level</code> 级页表起始地址。","不包括这个虚地址的最前页的页号。","清除页表项中的 ppn。","","","","","","","","","","","","","","判断是否包含所有指定的位。","向下移动一页。","","","","","","","","物理页转换为指针。","取出页表项属性。","包含这个虚页的 <code>level</code> 级页表起始地址。","包含这个虚页的 <code>level</code> 级页表起始地址。","包括这个虚地址最后页的页号。","","","","","","","","","","格式化特性位。","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","将 <code>raw</code> 整数转化为一个页表项属性。","从指向第一个页表项的指针创建页表。","从指向根页表的指针创建页表。","取出物理页号。","","","","","","","","虚页在 <code>level</code> 级页表中的位置。","虚页在 <code>level</code> 级页表中的位置。","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","新建一个无效物理页号。","判断页表项指向的是一个大于 0 级（4 …","如果页表项指向一个非 0 级的页，返回 <code>true</code>。","如果页表项指向一个非 0 级的页，返回 <code>true</code>。","如果页表项指向物理页，则返回 <code>true</code>。","如果页表项指向一个页而非子页表，返回 <code>true</code>…","如果页表项指向一个页而非子页表，返回 <code>true</code>…","判断页表项是否有效。","如果页表项有效，返回 <code>true</code>。","获取页表级别。","目标页表项的级别。","在访问 <code>target</code> 的过程中，经过一个包括 <code>target</code> …","在访问 <code>target</code> 的过程中，经过一个包括 <code>target</code> …","新建一个页号。","从一个物理页号新建。","…","新建目标。","向后移动一页。","页内偏移。","<code>level</code> 级页表容纳的总页数。","","","","","","从 PTE 中获得 PPN。","获取页表项指向的物理页号。","向前移动一页。","根页表。","获取页表容纳的虚页号范围。","设置页表项的 ppn。","结束遍历。","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","向上移动一页。","包含这个虚页的 <code>level</code> …","包含这个虚页的 <code>level</code> …","获取页号值。","虚地址值。","取出值。","如果页表项有效，返回 <code>true</code>。","目标页表项包含的一个虚页号。","使用访问器 <code>visitor</code> 遍历页表。","使用访问器 <code>visitor</code> 遍历并修改页表。"],"i":[0,13,3,33,13,6,3,3,1,3,0,0,33,0,1,33,33,0,0,0,0,0,0,12,0,12,0,11,33,0,0,1,0,0,0,0,3,11,8,3,5,3,5,6,3,34,35,5,10,5,6,3,11,11,11,11,11,11,34,35,24,12,10,3,15,7,16,5,11,8,9,24,12,10,3,15,7,16,5,11,8,9,11,1,1,6,3,5,1,3,15,7,16,5,11,8,9,3,15,7,16,5,11,9,3,15,7,16,5,11,8,24,8,6,3,5,13,6,24,15,7,5,11,8,9,33,24,12,10,3,15,7,16,5,5,5,11,8,9,11,10,10,16,3,15,7,16,5,11,10,6,3,10,24,12,10,3,15,7,16,5,11,8,9,16,1,11,8,33,11,8,33,8,10,9,34,35,3,16,5,9,9,5,1,3,15,7,16,5,1,8,9,24,10,1,9,24,12,10,3,15,7,16,5,11,8,9,24,12,10,3,15,7,16,5,11,8,9,24,12,10,3,15,7,16,5,11,8,9,9,6,3,3,5,11,11,9,10,10],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[[[3,[1,2]],4],[[3,[1,2]]]],[[[5,[1]],4],[[5,[1]]]],[[[3,[1,2]],4]],[[[5,[1]],4]],[[[6,[1]]],4],[[[3,[1,7]]],4],[[8,9],9],[[8,9],9],[[[5,[1]]]],[[[10,[1]]],8],[[[5,[1]]]],[[[6,[1]]],[[5,[1]]]],[[[3,[1,7]]],[[5,[1]]]],[[[11,[1]],[11,[1]]]],[[[11,[1]],[11,[1]]]],[[[11,[1]],[11,[1]]]],[[[11,[1]],[11,[1]]]],[[[11,[1]],[11,[1]]]],[[[11,[1]],[11,[1]]]],[[4,8,9],9],[[4,8,9],12],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[[11,[1]],[13,[1]]],[[8,[1]]]],[4,4],[4,4],[[[6,[1]],4],4],[[[3,[1,7]],4],4],[[[5,[1]]],[[6,[1]]]],[4],[[[3,[[0,[14,1]],[0,[14,2]]]]],[[3,[[0,[14,1]],[0,[14,2]]]]]],[15,15],[7,7],[[[16,[[0,[14,1]]]]],[[16,[[0,[14,1]]]]]],[[[5,[[0,[14,1]]]]],[[5,[[0,[14,1]]]]]],[[[11,[[0,[14,1]]]]],[[11,[[0,[14,1]]]]]],[[[8,[[0,[14,1]]]]],[[8,[[0,[14,1]]]]]],[[[9,[[0,[14,1]]]]],[[9,[[0,[14,1]]]]]],[[[3,[[0,[17,1]],[0,[17,2]]]],3],18],[[15,15],18],[[7,7],18],[[[16,[[0,[17,1]]]],16],18],[[[5,[[0,[17,1]]]],5],18],[[[11,[1]],[11,[1]]],19],[[[9,[1]]],[[9,[1]]]],[[[3,[[0,[20,1]],[0,[20,2]]]],3],19],[[15,15],19],[[7,7],19],[[[16,[[0,[20,1]]]],16],19],[[[5,[[0,[20,1]]]],5],19],[[[11,[[0,[20,1]]]],11],19],[[[8,[[0,[20,1]]]],8],19],0,[[[8,[1]]],[[11,[1]]]],[[[6,[1]],4],[[6,[1]]]],[[[3,[1,7]],4],[[3,[1,7]]]],[[[5,[1]]],[[6,[1]]]],[[[13,[1]],21],22],[[[6,[1]],21],22],[[[24,[1,23]],21],22],[[15,21],22],[[7,21],22],[[[5,[1]],21],22],[[[11,[[0,[25,1]]]],21],22],[[[8,[1]],21],22],[[[9,[1]],21],22],[[21,4],22],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[4,[[5,[1]]]],[[],[[5,[1]]]],[[]],[[]],[[]],[4,[[11,[1]]]],[[[26,[[8,[1]]]],[6,[1]],4],[[10,[1]]]],[[[26,[[8,[1]]]]],[[10,[1]]]],[[[16,[1]]],[[27,[[13,[1]]]]]],[[[3,[[0,[28,1]],[0,[28,2]]]]]],[15],[7],[[[16,[[0,[28,1]]]]]],[[[5,[[0,[28,1]]]]]],[[[11,[[0,[28,1]]]]]],[[[10,[1]],4]],[[[6,[1]],4],4],[[[3,[1,7]],4],4],[[[10,[1]],4]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[[16,[1]]]],[[4,4],19],[[[11,[1]],4],19],[[[8,[1]],4],19],[4,19],[[[11,[1]]],19],[[[8,[1]]],19],[4,19],[[[8,[1]]],19],[[[10,[1]]],4],0,[[4,8,9],[[27,[[26,[8]]]]]],[[4,8,9],[[27,[[26,[8]]]]]],[4,[[3,[1,2]]]],[[[13,[1]]],[[16,[1]]]],[4,[[5,[1]]]],[[[6,[1]],4],[[9,[1]]]],[[[9,[1]]],[[9,[1]]]],[[[5,[1]]],4],[4,4],[[[3,[[0,[29,1]],[0,[29,2]]]],3],[[27,[18]]]],[[15,15],[[27,[18]]]],[[7,7],[[27,[18]]]],[[[16,[[0,[29,1]]]],16],[[27,[18]]]],[[[5,[[0,[29,1]]]],5],[[27,[18]]]],[4,13],[[[8,[1]]],[[13,[1]]]],[[[9,[1]]],[[9,[1]]]],0,[[[10,[1]]],[[30,[[6,[1]]]]]],[[4,13]],[[],[[9,[1]]]],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],31],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[],32],[[[9,[1]]],[[9,[1]]]],[[[6,[1]],4],[[30,[[5,[1]]]]]],[[[3,[1,7]],4],[[30,[[5,[1]]]]]],[[[3,[1,2]]],4],[[[5,[1]]],4],[[[11,[1]]],4],[[[11,[1]]],19],0,[[[10,[1]],[9,[1]]]],[[[10,[1]],[9,[1]]]]],"p":[[8,"VmMeta"],[8,"Space"],[3,"PageNumber"],[15,"usize"],[3,"VAddr"],[6,"VPN"],[3,"Virtual"],[3,"Pte"],[3,"Pos"],[3,"PageTable"],[3,"VmFlags"],[4,"Update"],[6,"PPN"],[8,"Clone"],[3,"Physical"],[3,"MaybeInvalidPPN"],[8,"Ord"],[4,"Ordering"],[15,"bool"],[8,"PartialEq"],[3,"Formatter"],[6,"Result"],[8,"Fn"],[3,"PageTableFormatter"],[8,"Debug"],[3,"NonNull"],[4,"Option"],[8,"Hash"],[8,"PartialOrd"],[3,"Range"],[4,"Result"],[3,"TypeId"],[8,"MmuMeta"],[8,"Visitor"],[8,"Decorator"]]},\
"static_assertions":{"doc":"Banner","t":[14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14],"n":["assert_cfg","assert_eq_align","assert_eq_size","assert_eq_size_ptr","assert_eq_size_val","assert_fields","assert_impl_all","assert_impl_any","assert_impl_one","assert_not_impl_all","assert_not_impl_any","assert_obj_safe","assert_trait_sub_all","assert_trait_super_all","assert_type_eq_all","assert_type_ne_all","const_assert","const_assert_eq","const_assert_ne"],"q":["static_assertions","","","","","","","","","","","","","","","","","",""],"d":["Asserts that a given configuration is set.","Asserts that types are equal in alignment.","Asserts that types are equal in size.","Asserts that values pointed to are equal in size.","Asserts that values are equal in size.","Asserts that the type has the given fields.","Asserts that the type implements <em>all</em> of the given traits.","Asserts that the type implements <em>any</em> of the given traits.","Asserts that the type implements exactly one in a set of …","Asserts that the type does <strong>not</strong> implement <em>all</em> of the given …","Asserts that the type does <strong>not</strong> implement <em>any</em> of the given …","Asserts that the traits support dynamic dispatch (…","Asserts that the trait is a child of all of the other …","Asserts that the trait is a parent of all of the other …","Asserts that <em>all</em> types in a list are equal to each other.","Asserts that <em>all</em> types are <strong>not</strong> equal to each other.","Asserts that constant expressions evaluate to <code>true</code>.","Asserts that constants are equal in value.","Asserts that constants are <strong>not</strong> equal in value."],"i":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"p":[]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};