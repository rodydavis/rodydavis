import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'files/files.dart';
import 'files/files_impl.dart';

final filesProvider = Provider<Files>((ref) => FilesImpl());
